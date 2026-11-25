<script>
  let { href = '#', label, cls = 'btn-dark' } = $props();
</script>

<a {href} class="btn {cls} btn-pill btn-fit"><span class="lbl">{label}</span></a>
