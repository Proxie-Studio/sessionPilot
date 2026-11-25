<script>
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { NAV, APP } from '#lib/site.js';
  import Btn from './Btn.svelte';

  let scrolled = $state(false);
  let open = $state(false); // mobile menu
  const path = $derived(page.url.pathname.replace(/\/$/, '') || '/');
  // Industry sub-pages highlight "Industries", card fees highlights "POS"
  const current = $derived(
    ['/restaurants', '/hotels', '/hospitality'].includes(path)
      ? '/industries'
      : path === '/card-fees-explainer'
        ? '/pos'
        : path.startsWith('/article')
          ? '/article'
          : path
  );
  // Flat list for the mobile menu (sub-pages indented under their parent)
  const flat = NAV.flatMap((n) => [{ ...n, sub: false }, ...(n.children ?? []).map((c) => ({ ...c, sub: true }))]);

  afterNavigate(() => (open = false));
</script>

<svelte:window
  onscroll={() => (scrolled = scrollY > 40)}
  onkeydown={(e) => e.key === 'Escape' && (open = false)}
  onresize={() => innerWidth > 1000 && (open = false)}
/>

<header class="nav" class:scrolled class:menu-open={open}>
  <div class="wrap nav-in">
    <a href="/" class="logo"><img src="/assets/LBPIdUJOxnjdmfjUONPoNOlkRg.png" alt="Session Pilot" /></a>
    <nav class="links">
      {#each NAV as n, i}
        {#if i}<i></i>{/if}
        {#if n.children}
          <!-- Opens on hover and on keyboard focus (focus-within) -->
          <div class="dd">
            <a href={n.href} class:cur={current === n.href} aria-haspopup="true">{n.label}</a>
            <div class="dd-menu">
              <ul>
                {#each n.children as c}
                  <li><a href={c.href} class:on={path === c.href}>{c.label}</a></li>
                {/each}
              </ul>
            </div>
          </div>
        {:else}
          <a href={n.href} class:cur={current === n.href}>{n.label}</a>
        {/if}
      {/each}
    </nav>
    <Btn href={APP} label="Customer Login" extra="btn-sm" />
    <button class="menu-btn" class:open aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mnav" onclick={() => (open = !open)}>
      <span></span><span></span>
    </button>
    <span class="nav-progress" aria-hidden="true"></span>
  </div>
  <nav id="mnav" class="mnav" class:open aria-hidden={!open} inert={!open}>
    <ul class="wrap">
      {#each flat as n, i}
        <li class:sub={n.sub} style="--i:{i}">
          <a href={n.href} class:cur={n.sub ? path === n.href : current === n.href}>{n.label}</a>
        </li>
      {/each}
      <li class="mcta" style="--i:{flat.length}"><Btn href={APP} label="Customer Login" extra="btn-sm" /></li>
    </ul>
  </nav>
</header>
