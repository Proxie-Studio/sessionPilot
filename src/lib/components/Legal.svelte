<script>
  import Split from './Split.svelte';

  /** Renders a legal document: data = { updated, blocks: [{t:'sec'|'p'|'ul', ...}] } (text fields contain trusted inline HTML). */
  let { title, data } = $props();
</script>

<svelte:head><title>{title} | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="legal">
    <span class="upd">{data.updated}</span>
    <Split text={title} />
    {#each data.blocks as b}
      {#if b.t === 'sec'}
        <div class="sh reveal">{#if b.n}<span>{b.n}</span>{/if}<h2>{@html b.x}</h2></div>
      {:else if b.t === 'ul'}
        <ul>{#each b.x as li}<li>{@html li}</li>{/each}</ul>
      {:else}
        <p>{@html b.x}</p>
      {/if}
    {/each}
  </div>
</section>
<div style="height:100px"></div>
