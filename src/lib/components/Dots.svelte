<script>
  let { n = 1 } = $props();
</script>

<span class="dots">{#each Array(n) as _}<i></i>{/each}</span>
