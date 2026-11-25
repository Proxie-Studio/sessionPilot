<script>
  import Split from '#lib/components/Split.svelte';
  import Btn from '#lib/components/Btn.svelte';
  import Cta from '#lib/components/Cta.svelte';

  const cards = [
    ['Restaurants', 'Restaurant operations', 'Digitize daily checklists, food safety, staff tasks, maintenance, communication, and compliance across every restaurant.', '/restaurants'],
    ['Hotels', 'Hotel Operations, Simplified.', 'Manage housekeeping, inspections, maintenance, staff tasks, guest operations, and daily hotel workflows from one platform.', '/hotels'],
    ['Hospitality', 'Hospitality Operations, Simplified.', 'Standardize daily operations, employee workflows, compliance, and reporting across properties and hospitality teams.', '/hospitality']
  ];
  const withUs = [['Documentation', 'Centralized'], ['Checklists', 'Digital'], ['Communication', 'Centralized'], ['Visibility', 'Live']];
  const manual = [['Documentation', 'Disconnected'], ['Checklists', 'Paper'], ['Communication', 'Scattered'], ['Visibility', 'Limited']];
</script>

<svelte:head><title>Industries | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="ind-head">
    <div><span class="eyebrow reveal">Industries</span><Split text="Solutions Built for Your Industry" /></div>
    <div class="r reveal" style="--d:.3s">
      <p>SessionPilot helps restaurants, hotels, and hospitality teams digitize daily operations, standardize workflows, and improve visibility across every location.</p>
      <div class="pills"><span>3+ Industries</span><span>Multiple Use Cases</span><span>One Platform</span></div>
    </div>
  </div>
  <div class="ind-img reveal"><img src="/assets/WkCfW2YwyDLkRtPwtLLfxR2n0g.png" alt="" /></div>
  <div class="icards">
    {#each cards as [tag, t, d, href], i}
      <a {href} class="icard reveal" style="--d:{i * 0.1}s">
        <div class="tag">{tag}</div>
        <div class="bd"><h3>{t}</h3><p>{d}</p><span class="link-arrow">View industry →</span></div>
      </a>
    {/each}
  </div>
</section>

<section class="wrap sec" style="padding-top:120px">
  <div class="split2">
    <div>
      <span class="eyebrow reveal">Built Around You</span>
      <h2 class="h2 reveal" style="--d:.08s">Don't see your industry? Tell us what you need.</h2>
      <p class="reveal">Every organization operates differently. Tell us about your processes, and we'll help you build digital workflows around the way your team actually works.</p>
      <Btn href="/contact" label="Talk to our team →" extra="btn-sm reveal" />
    </div>
    <div class="img reveal"><img src="/assets/ULMohTCt10k6k78NMGWNcEnv6Xs.png" alt="" /></div>
  </div>
</section>

<section class="wrap sec" style="padding-top:110px">
  <div class="sec-head">
    <div>
      <span class="eyebrow reveal">Why SessionPilot</span>
      <h2 class="h2 reveal" style="--d:.08s">Restaurant operations, before and after.</h2>
    </div>
    <div class="reveal" style="max-width:300px;margin-right:90px">
      <p class="lead" style="margin:0 0 14px">See how SessionPilot replaces scattered paperwork and manual follow-ups with standardized digital operations.</p>
      <Btn href="/restaurants" label="Open this industries" extra="btn-sm" />
    </div>
  </div>
  <div class="ba">
    <div class="col with">
      <h5>With SessionPilot</h5>
      {#each withUs as [a, v]}<div class="row"><span>{a}</span><b>{v}</b></div>{/each}
    </div>
    <div class="col" style="transition-delay:.15s">
      <h5>Manual</h5>
      {#each manual as [a, v]}<div class="row"><span>{a}</span><b>{v}</b></div>{/each}
    </div>
  </div>
  <img class="mosaic-band" src="/assets/L55zfCIiJASwGZevHK4Gc1TCGoc.png" alt="" />
</section>
<div style="height:60px"></div>

<Cta />
