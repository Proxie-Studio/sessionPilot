<script>
  import { base } from '#lib/base.js';
  import { marquee, pill } from '#lib/actions.js';
  import Split from '#lib/components/Split.svelte';
  import Btn from '#lib/components/Btn.svelte';
  import SecHead from '#lib/components/SecHead.svelte';
  import Plans from '#lib/components/Plans.svelte';
  import TstMarquee from '#lib/components/TstMarquee.svelte';
  import FaqSection from '#lib/components/FaqSection.svelte';
  import Cta from '#lib/components/Cta.svelte';

  const logos = [
    ['1gO0UJmD8TyeYzvYheDIKH24xOc.png', 'Surya'], ['2tDRONCD1mM8k7ijcyqeSeJnQYk.png', 'Rooh'],
    ['4QNuoyMA1d4HQPACuFqcyHCpzNE.png', 'Saffron'], ['CmS4JnreRQqRf79IJACUUJuHQAg.png', 'Bella Ciao'],
    ['OPW5wK2yQjWMfPiBMQeGDbOd3k.png', 'Babal'], ['VeXRLVkrgnim0mzNVuYuM4Jd9Z8.png', 'Frietje'],
    ['YcoyBH9fctaivkGpRWIdhs0kIO4.png', 'Little Asia'], ['bOpqVgG2T7giyJbza37cKXJ2IY.png', "Galippo's"],
    ['mHb4hlib3lZwdfaU38AEsPlZeg.png', 'The Little Indian'], ['qMwudYt7OqnAfkimarnDwgZXFGs.webp', 'Mustache'],
    ['toTPuWFF9aQdg3sZW5Vvtq7U.png', 'Zorba'], ['uVcw7xtU82kAWoaVoxw5ZbkcdG4.png', 'Sushi Time']
  ];

  /* ---- "Built for Restaurant Operations": hover/click expands a card ---- */
  const cards = [
    { n: '01.', mosaic: 'mosaic-checklists.svg', prev: 'prev-checklists.svg', t: 'Opening & Closing Checklists', d: 'Standardize every shift with digital opening and closing checklists. Ensure tasks are completed consistently and nothing important is missed.' },
    { n: '02.', mosaic: 'mosaic-sops.svg', prev: 'prev-sops.svg', t: 'Standard Operating Procedures', d: 'Give every employee clear, consistent instructions for completing tasks correctly across every shift.' },
    { n: '03.', mosaic: 'mosaic-communication.svg', prev: 'prev-communication.svg', t: 'Team Communication', d: 'Announcements, shift updates, and team messages all in one place. SessionPilot keeps every restaurant aligned, with no missed information or extra work.' },
    { n: '04.', mosaic: 'mosaic-visibility.svg', prev: 'prev-visibility.svg', t: 'Real-time Visibility', d: 'Track tasks, checklists, and issues in real time across every restaurant. SessionPilot gives managers instant visibility into what’s done, what’s pending, and what needs attention.' }
  ];
  let activeCard = $state(1);

  /* ---- "One Platform": accordion that auto-advances every 5s while on screen ---- */
  const steps = [
    ['Manage every location', 'Manage restaurant branches, operating hours, holidays, and employee clock-ins from one place with QR-based attendance.', 'Xi6ogIRS9PjjWCYqfjsJV92jCFs.png'],
    ['Plan every shift', 'Build weekly schedules, collect availability and approve leave requests without a single spreadsheet.', 'dELKUiw4WYTpZ3HKKK8IVtGflI.png'],
    ['See the month ahead', 'A clear monthly view of coverage, so gaps are spotted and fixed long before they become problems.', 'Xi6ogIRS9PjjWCYqfjsJV92jCFs.png'],
    ['Keep every role clear', 'Define roles and responsibilities so every employee knows exactly what is expected on every shift.', 'dELKUiw4WYTpZ3HKKK8IVtGflI.png']
  ];
  let step = $state(0);
  let platformEl = $state();
  let platformVisible = $state(false);
  $effect(() => {
    if (!platformEl) return;
    const io = new IntersectionObserver(([e]) => (platformVisible = e.isIntersecting), { threshold: 0.3 });
    io.observe(platformEl);
    return () => io.disconnect();
  });
  $effect(() => {
    if (!platformVisible) return;
    const current = step; // re-arm the timer whenever the step changes (including on click)
    const id = setTimeout(() => (step = (current + 1) % steps.length), 5000);
    return () => clearTimeout(id);
  });

  /* ---- "How it works": tabs scrub the video ---- */
  const tabs = ['Week planning', 'Attendance', 'Shift planning'];
  let tab = $state(0);
  let video = $state();
  function pickTab(i) {
    tab = i;
    if (video?.duration) video.currentTime = (video.duration * i) / tabs.length;
    video?.play().catch(() => {});
  }

  const faq = [
    ['Does SessionPilot replace paper checklists?', 'Yes. Digital opening and closing checklists replace paper entirely, with completion tracked in real time for every shift.'],
    ['Can I manage multiple restaurants?', 'Absolutely. Manage one restaurant or fifty from a single multi-location dashboard with role-based permissions.'],
    ['Does it work offline?', "The mobile app keeps working with limited connectivity and syncs your changes as soon as you're back online."],
    ['Can employees upload photos?', 'Yes. Employees can attach photos to tasks, checklists and incident reports straight from their phone.'],
    ['Can payroll reports be generated?', 'Payroll-ready reports are generated from attendance and shift data in a few clicks.']
  ];
</script>

<svelte:head><title>SessionPilot</title></svelte:head>

<!-- HERO -->
<section class="wrap hero-wrap">
  <div class="hero">
    <video class="hero-video" src="{base}/assets/vfuMd5nhYgjGrCIqN0ns12STqk.mp4" autoplay muted loop playsinline></video>
    <div class="hero-shade"></div>
    <div class="hero-in">
      <Split text="Restaurant Operations. Simplified. Every Shift. Every Store." />
      <p class="hero-p reveal" style="--d:.5s">Everything your restaurant needs to run daily operations in one platform from opening checklists and food safety to employee scheduling, payroll reports, maintenance, communication, and compliance.</p>
      <Btn href="{base}/contact" label="Book a Demo" extra="reveal" style="--d:.65s" />
    </div>
  </div>
  <p class="trusted reveal">Trusted by restaurants, cafés, hotels, and restaurant groups to digitize daily operations.</p>
  <div class="marquee logos" aria-hidden="true">
    <div class="track" use:marquee={{ secs: 40 }}>
      {#each logos as [src, alt]}<img src="{base}/assets/{src}" {alt} />{/each}
    </div>
  </div>
</section>

<!-- WHY -->
<section class="wrap sec" id="features">
  <SecHead eyebrow="Why SessionPilot OPS" title="Built for Restaurant Operations" lead="Running a restaurant shouldn't require paper checklists, WhatsApp groups, spreadsheets, and multiple systems.  SessionPilot OPS brings your entire operation into one place." />
  <div class="cards">
    {#each cards as c, i}
      <article class="card" class:active={activeCard === i} role="presentation"
        onmouseenter={() => (activeCard = i)} onclick={() => (activeCard = i)}>
        <span class="num">{c.n}</span>
        <img class="mosaic" src="{base}/assets/{c.mosaic}" alt="" />
        <div class="prev"><img src="{base}/assets/{c.prev}" alt="" /></div>
        <div class="ct"><h3>{c.t}</h3><p>{c.d}</p></div>
      </article>
    {/each}
  </div>
</section>

<!-- PLATFORM -->
<section class="wrap sec" id="tools">
  <SecHead eyebrow="Intelligent Operations Section" title="One Platform. Every Daily Operation." lead="Whether you're managing one restaurant or fifty locations, SessionPilot keeps your operations organized and standardized." />
  <div class="platform" bind:this={platformEl}>
    <ul class="acc">
      {#each steps as [t, d], i}
        <li class:active={step === i} role="presentation" onclick={() => (step = i)}>
          <div class="acc-t">
            <svg class="chev" viewBox="0 0 20 20"><path d="M3 4l6 6-6 6M10 4l6 6-6 6" /></svg>
            <h3>{t}</h3>
          </div>
          <div class="acc-b"><p>{d}</p></div>
          {#if step === i && platformVisible}
            {#key step}<span class="acc-timer" aria-hidden="true"></span>{/key}
          {/if}
        </li>
      {/each}
    </ul>
    <div class="shot">
      {#each steps as s, i}<img class:on={step === i} src="{base}/assets/{s[2]}" alt="" />{/each}
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="sec" id="testimonials">
  <div class="center-head wrap">
    <span class="eyebrow reveal">What people say</span>
    <h2 class="h2 reveal" style="--d:.08s">Restaurant testimonials.</h2>
  </div>
  <div class="wrap"><TstMarquee /></div>
</section>

<!-- PRICING -->
<section class="wrap sec" id="pricing">
  <SecHead eyebrow="Pricing" title="Simple, transparent pricing. <em>No surprises.</em>" lead="Start free, scale as you grow. Every plan includes core features upgrade when you need more power or seats." />
  <Plans />
</section>

<!-- HOW IT WORKS -->
<section class="wrap sec" id="how">
  <div class="center-head">
    <span class="eyebrow reveal">How it works</span>
    <h2 class="h2 reveal" style="--d:.08s">Get Started in<br />Days, Not Months</h2>
    <p class="lead2 reveal" style="--d:.16s">From ask to done. Without the back-and-forth.</p>
  </div>
  <div class="how reveal">
    <img class="how-bg" src="{base}/assets/g2Q0UEGYPma6FK2cD4vkNBVTXao.png" alt="" />
    <div class="tabs" use:pill={tab}>
      {#each tabs as t, i}<button class:on={tab === i} onclick={() => pickTab(i)}>{t}</button>{/each}
    </div>
    <div class="frame">
      <video bind:this={video} src="{base}/assets/nLpQcbzQAcQWS4hJbUSqc9IrYA.mp4" autoplay muted loop playsinline></video>
    </div>
  </div>
</section>

<FaqSection items={faq} />
<div style="height:100px"></div>
<Cta />
<div style="height:100px"></div>
