<script>
  /** Eyebrow + h2 on the left, optional lead paragraph on the right. */
  let { eyebrow, title, lead = '', h2style = '' } = $props();
</script>

<div class="sec-head">
  <div>
    <span class="eyebrow reveal">{eyebrow}</span>
    <h2 class="h2 reveal" style="--d:.08s;{h2style}">{@html title}</h2>
  </div>
  {#if lead}<p class="lead reveal" style="--d:.16s">{lead}</p>{/if}
</div>
