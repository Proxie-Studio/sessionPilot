<script>
  /** Accordion: one open at a time. items = [[question, answer], ...] */
  let { items } = $props();
  let open = $state(-1);
</script>

<div class="faq-r">
  {#each items as [q, a], i}
    <div class="q" class:open={open === i}>
      <button onclick={() => (open = open === i ? -1 : i)}>{q}<span class="plus"></span></button>
      <div class="a"><p>{a}</p></div>
    </div>
  {/each}
</div>
