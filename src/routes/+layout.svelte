<script>
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import { observeAll } from '#lib/actions.js';

  let { children } = $props();

  // Re-arm scroll-reveal animations after every (client-side) navigation, and on first load.
  afterNavigate(() => requestAnimationFrame(() => observeAll()));
</script>

{@render children()}
