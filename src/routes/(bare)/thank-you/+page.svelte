<script>
  import { base } from '#lib/base.js';
  import Split from '#lib/components/Split.svelte';
  import Btn from '#lib/components/Btn.svelte';
</script>

<svelte:head><title>Thank you | SessionPilot</title></svelte:head>

<div class="center-page">
  <div class="ty-card">
    <a href="{base}/" class="logo" style="display:inline-block;margin-bottom:40px"><img src="{base}/assets/LBPIdUJOxnjdmfjUONPoNOlkRg.png" alt="Session Pilot" style="height:30px" /></a>
    <Split text="Thank you so much!" />
    <p class="reveal" style="--d:.4s">You're now on the waitlist! Stay tuned for updates.</p>
    <Btn href="{base}/" label="Back to home" extra="btn-sm" />
  </div>
  <div class="ty-foot">© 2026 Session Pilot.</div>
</div>
