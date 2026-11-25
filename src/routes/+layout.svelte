<script>
  import '../app.css';
  import { afterNavigate, onNavigate } from '$app/navigation';
  import { observeAll, installSpotlight } from '#lib/actions.js';

  let { children } = $props();

  // Re-arm scroll-reveal animations after every (client-side) navigation, and on first load.
  afterNavigate(() => requestAnimationFrame(() => observeAll()));

  // Cards that get the soft cursor-following highlight (styled in app.css under "spotlight").
  $effect(() => installSpotlight('.plan, .icard, .mini, .pcard, .ccard, .frow, .bigcard, .t, .card'));

  // Soft cross-fade between pages where the View Transitions API is available.
  onNavigate((navigation) => {
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

{@render children()}
