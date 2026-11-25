<script>
  import { page } from '$app/state';
  import Btn from '#lib/components/Btn.svelte';
</script>

<svelte:head><title>{page.status} | SessionPilot</title></svelte:head>

<div class="center-page">
  <div class="nf"><img src="/assets/nSsY8iV8mErmGDydvsPxQyHGP0.png" alt="" /></div>
  <div class="nf-in">
    <div class="big">{page.status}</div>
    <h2>Oops! The page you’re looking for can’t be found.</h2>
    <Btn href="/" label="Go to Home page" extra="btn-sm" />
  </div>
</div>
