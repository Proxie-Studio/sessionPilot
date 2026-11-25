<script>
  import Split from '#lib/components/Split.svelte';
  import Cta from '#lib/components/Cta.svelte';
  import articles from '#lib/data/articles.json';

  const by = Object.fromEntries(articles.map((a) => [a.slug, a]));
  const feat = ['article2', 'article5'].map((s) => by[s]);
  const list = ['article7', 'article6', 'article4', 'article3', 'article1'].map((s) => by[s]);
</script>

<svelte:head><title>Articles | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="art-top">
    <span class="eyebrow reveal">Articles</span>
    <Split text="The Session Pilot Articles" />
  </div>
  <div class="art-grid">
    <div>
      {#each feat as a, i}
        <a href="/article/{a.slug}" class="art-feat reveal" style="--d:{i * 0.1}s">
          <div class="im"><img src="/assets/{a.img}" alt="" /></div>
          <div class="mt"><h3>{a.title}</h3><div><p>{a.sub}</p><small>{a.date}</small></div></div>
        </a>
      {/each}
    </div>
    <div class="art-list">
      {#each list as a, i}
        <a href="/article/{a.slug}" class="reveal" style="--d:{i * 0.07}s">
          <h4>{a.title}</h4><p>{a.sub}</p><small>{a.date}</small>
        </a>
      {/each}
    </div>
  </div>
</section>
<div style="height:100px"></div>

<Cta />
