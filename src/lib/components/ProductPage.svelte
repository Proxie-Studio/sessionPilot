<script>
  import { countUp } from '#lib/actions.js';
  import Split from './Split.svelte';
  import PillBtn from './PillBtn.svelte';
  import Dots from './Dots.svelte';
  import Cta from './Cta.svelte';

  /** Shared template for Integrations / Tools / Restaurants / Hotels / Hospitality. */
  let { o } = $props();
  const logos = [
    'mHb4hlib3lZwdfaU38AEsPlZeg.png', 'YcoyBH9fctaivkGpRWIdhs0kIO4.png', '4QNuoyMA1d4HQPACuFqcyHCpzNE.png',
    'uVcw7xtU82kAWoaVoxw5ZbkcdG4.png', '2tDRONCD1mM8k7ijcyqeSeJnQYk.png'
  ];
</script>

<svelte:head><title>{o.eyebrow} | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="phero">
    <span class="eyebrow reveal">{o.eyebrow}</span>
    <Split text={o.h1} />
    <p class="reveal" style="--d:.4s">{o.sub}</p>
    <div class="reveal" style="--d:.5s"><PillBtn href="/contact" label="Try this workflow" /></div>
  </div>
  <div class="panel hero-panel reveal"><img src="/assets/{o.heroImg}" alt="" /></div>
</section>

<section class="wrap sec">
  <div class="prod-head">
    <div>
      <span class="eyebrow reveal">{o.pEyebrow}</span>
      <h2 class="h2 reveal" style="--d:.08s">{o.pTitle}</h2>
    </div>
    <p class="lead reveal" style="--d:.16s">{o.pIntro}</p>
  </div>
  {#if o.big}
    <article class="bigcard reveal">
      <div class="tx"><Dots n={1} /><h3>{o.big.t}</h3><p>{o.big.d}</p></div>
      <div class="pn"><img src="/assets/{o.big.img}" alt="" /></div>
    </article>
  {:else}
    <article class="bigcard solo reveal">
      <div class="pn"><img src="/assets/{o.soloImg}" alt="" style="left:10%;width:90%" /></div>
    </article>
  {/if}
  <div class="minis">
    {#each o.cards as [t, d], i}
      <article class="mini reveal" style="--d:{i * 0.1}s"><Dots n={i + 2} /><div><h3>{t}</h3><p>{d}</p></div></article>
    {/each}
  </div>
</section>

<section class="wrap sec" style="padding-top:100px">
  <div class="center-head">
    <span class="eyebrow reveal">{o.tEyebrow}</span>
    <h2 class="h2 reveal" style="--d:.08s;max-width:430px">{o.tTitle}</h2>
  </div>
  <div class="tband reveal">
    <div class="in">
      <div class="qt">
        <span>{o.quote}</span>
        <div class="who"><img src="/assets/{o.avatar}" alt="" /><div>{o.who}<small>{o.role}</small></div></div>
      </div>
      {#if o.stat}
        <div class="stat"><b use:countUp={parseInt(o.stat[0])}>{o.stat[0]}</b>{o.stat[1]}</div>
      {:else}
        <div></div>
      {/if}
    </div>
  </div>
  <div class="logos-row reveal">{#each logos as l}<img src="/assets/{l}" alt="" />{/each}</div>
</section>
<div style="height:80px"></div>

<Cta />
