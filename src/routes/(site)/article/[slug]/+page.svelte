<script>
  import { base } from '#lib/base.js';
  import Cta from '#lib/components/Cta.svelte';

  let { data } = $props();
  const a = $derived(data.article);
</script>

<svelte:head><title>{a.title} | SessionPilot</title></svelte:head>

<section class="wrap">
  <article class="post">
    <a class="back" href="{base}/article">‹ Articles</a>
    <h1 class="reveal">{a.title}</h1>
    <p class="sub reveal" style="--d:.1s">{a.sub}</p>
  </article>
  <div class="post-img reveal"><img src="{base}/assets/{a.hero}" alt="" /></div>
  <div class="post-body reveal">
    {#each a.blocks as b}
      {#if b.t === 'h'}
        <h4>{b.x}</h4>
      {:else if b.t === 'table'}
        <table>
          <thead><tr><th></th>{#each b.head as h}<th>{h}</th>{/each}</tr></thead>
          <tbody>{#each b.rows as r}<tr>{#each r as c}<td>{c}</td>{/each}</tr>{/each}</tbody>
        </table>
      {:else}
        <p>{b.x}</p>
      {/if}
    {/each}
  </div>
  <div class="related">
    <h3>Related posts</h3>
    <div class="g">
      {#each data.related as r}
        <a href="{base}/article/{r.slug}">
          <div class="im"><img src="{base}/assets/{r.img}" alt="" /></div>
          <h5>{r.title}</h5><small>{r.date}</small>
        </a>
      {/each}
    </div>
  </div>
</section>
<div style="height:90px"></div>

<Cta />
