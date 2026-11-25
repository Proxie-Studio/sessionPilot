<script>
  import { base } from '#lib/base.js';
  import { goto } from '$app/navigation';
  import Split from '#lib/components/Split.svelte';

  // Front-end only: no email is stored, we just move on to the thank-you page.
  const join = (e) => {
    e.preventDefault();
    goto(`${base}/thank-you`);
  };
</script>

<svelte:head><title>Plan your employees now! | SessionPilot Ops</title></svelte:head>

<div class="wl">
  <div class="l">
    <a href="{base}/" class="brand">SessionPilot Ops</a>
    <div class="mid">
      <span class="eb reveal">Available Now</span>
      <Split text="Plan your employees now!" />
      <p class="reveal" style="--d:.4s">Free trial for 30 days</p>
      <form class="reveal" style="--d:.5s" onsubmit={join}>
        <input type="email" placeholder="name@email.com" required />
        <button type="submit">Join waitlist</button>
      </form>
      <div class="join reveal" style="--d:.6s">
        <span class="av">
          <img src="{base}/assets/7dJlaqAKOS2SKjKsbVHCmpU49Q.png" alt="" />
          <img src="{base}/assets/mV90oDFpWHZQfQ5wZ7FwQdGGx10.png" alt="" />
          <img src="{base}/assets/DissZ7PhtUOi3HpT0s1n798F80.png" alt="" />
        </span>
        <span>Join 3000+ others</span>
      </div>
    </div>
    <div class="foot-s">© 2026 SessionPilot OPs.<span>Scheduling and planning software</span></div>
  </div>
  <div class="r"><img src="{base}/assets/Q3BLTHE4nSPQ4HK3nExfanPh0o.png" alt="" /></div>
</div>
