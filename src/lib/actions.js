// Svelte actions that replace the imperative main.js from the HTML version.

let io;
function observer() {
  if (typeof IntersectionObserver === 'undefined') return null;
  io ??= new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  return io;
}

/** Adds the `in` class once the element scrolls into view (drives all .reveal animations). */
export function reveal(node) {
  const o = observer();
  if (!o) return;
  o.observe(node);
  return { destroy: () => o.unobserve(node) };
}

/** Adds `in` on the next frames after mount (used for above-the-fold headlines). */
export function onLoadIn(node) {
  requestAnimationFrame(() => requestAnimationFrame(() => node.classList.add('in')));
}

/** Counts a number up when it first becomes visible. Keeps any non-digit suffix (e.g. "%"). */
export function countUp(node, to) {
  const suffix = node.textContent.replace(/[\d.]/g, '');
  const io2 = new IntersectionObserver(
    ([en], o) => {
      if (!en.isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      (function step(t) {
        const p = Math.min(1, (t - t0) / 1400);
        node.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    },
    { threshold: 0.6 }
  );
  io2.observe(node);
  return { destroy: () => io2.disconnect() };
}

/**
 * Infinite horizontal marquee. `node` is the track; its children are cloned until
 * the track covers 2x the container, then it scrolls one "set" per `secs` seconds.
 * With `pauseOnHover` the scroll eases to a stop while hovered.
 */
export function marquee(node, { secs = 40, gap = 0, pauseOnHover = false } = {}) {
  const parent = node.parentElement;
  const orig = [...node.children];
  const fill = () => {
    while (node.scrollWidth < parent.clientWidth * 2 + 400)
      orig.forEach((n) => {
        const c = n.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        node.appendChild(c);
      });
  };
  const loopW = () => {
    const g = gap || parseFloat(getComputedStyle(node).columnGap) || 0;
    return orig.reduce((w, n) => w + n.getBoundingClientRect().width + g, 0);
  };
  fill();
  let L = loopW();
  let x = 0,
    last = performance.now(),
    paused = false,
    speed = 1,
    raf;
  const onResize = () => {
    fill();
    L = loopW();
  };
  const enter = () => (paused = pauseOnHover);
  const leave = () => (paused = false);
  addEventListener('resize', onResize);
  parent.addEventListener('mouseenter', enter);
  parent.addEventListener('mouseleave', leave);
  (function tick(t) {
    const dt = (t - last) / 1000;
    last = t;
    speed += ((paused ? 0 : 1) - speed) * Math.min(1, dt * 6);
    x -= (L / secs) * dt * speed;
    if (-x >= L) x += L;
    node.style.transform = `translate3d(${x}px,0,0)`;
    raf = requestAnimationFrame(tick);
  })(last);
  return {
    destroy() {
      cancelAnimationFrame(raf);
      removeEventListener('resize', onResize);
      parent.removeEventListener('mouseenter', enter);
      parent.removeEventListener('mouseleave', leave);
    }
  };
}

/**
 * Segmented-control highlight: a white pill (the node's ::before) that glides to whichever
 * child has the `.on` class. Pass any value that changes with the selection (e.g. the index)
 * so the pill re-measures. Until measured, the static `.on` background is used as a fallback.
 */
export function pill(node, _key) {
  node.classList.add('pill-track');
  let raf;
  const set = () => {
    const el = node.querySelector('.on');
    if (!el) return;
    node.style.setProperty('--px', el.offsetLeft + 'px');
    node.style.setProperty('--pw', el.offsetWidth + 'px');
  };
  const arm = () => {
    set();
    // enable the transition only after the first measurement so it doesn't slide in from 0
    raf = requestAnimationFrame(() => (raf = requestAnimationFrame(() => node.classList.add('pill-ready'))));
  };
  arm();
  document.fonts?.ready.then(set);
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(set) : null;
  ro?.observe(node);
  return {
    update: () => requestAnimationFrame(set),
    destroy() {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    }
  };
}

/**
 * Cursor spotlight: one delegated listener that feeds the pointer position (--mx/--my)
 * to whichever card matching `selector` is under the pointer. Returns a cleanup function.
 */
export function installSpotlight(selector) {
  if (typeof matchMedia === 'undefined' || !matchMedia('(hover: hover) and (pointer: fine)').matches) return () => {};
  let raf = 0, last;
  const apply = () => {
    raf = 0;
    const el = last.target.closest?.(selector);
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', last.clientX - r.left + 'px');
    el.style.setProperty('--my', last.clientY - r.top + 'px');
  };
  const onMove = (e) => {
    last = e;
    raf ||= requestAnimationFrame(apply);
  };
  addEventListener('pointermove', onMove, { passive: true });
  return () => {
    removeEventListener('pointermove', onMove);
    cancelAnimationFrame(raf);
  };
}

/** Observe every not-yet-revealed element on the page (called after each navigation). */
export function observeAll(root = document) {
  const o = observer();
  if (!o) return;
  root
    .querySelectorAll('.reveal:not(.in), .ba .col:not(.in), .hero-panel:not(.in)')
    .forEach((el) => o.observe(el));
}
