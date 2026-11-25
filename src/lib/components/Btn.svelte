<script>
  /** Orange-chevron button used across the site. */
  let { href = '#', label, cls = 'btn-dark', extra = '', ...rest } = $props();
</script>

<a {href} class="btn {cls} {extra}" {...rest}>
  <span class="ico"><svg viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" /></svg></span>
  <span class="lbl">{label}</span>
</a>
