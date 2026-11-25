<script>
  import { APP } from '#lib/site.js';
  import { pill } from '#lib/actions.js';
  import Btn from './Btn.svelte';

  // Billing toggle: the starter price tweens between €20 and €17 (-15% annual)
  let annual = $state(false);
  let price = $state(20);
  let raf;
  function setBilling(a) {
    annual = a;
    const from = price,
      to = a ? 17 : 20,
      t0 = performance.now();
    cancelAnimationFrame(raf);
    (function step(t) {
      const p = Math.min(1, (t - t0) / 500);
      price = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    })(t0);
  }
</script>

<div class="toggle-row">
  <div class="toggle" use:pill={annual}>
    <button class:on={!annual} onclick={() => setBilling(false)}>Monthly</button>
    <button class:on={annual} onclick={() => setBilling(true)}>Annual <b>-15%</b></button>
  </div>
</div>
<div class="plans">
  <article class="plan reveal">
    <h4>Starter</h4>
    <div class="price"><span>€{price}</span>/month</div>
    <p class="muted">Perfect for independent restaurants</p>
    <ul><li>Up to 10 Employees</li><li>Daily Checklists</li><li>SOP Library</li><li>Task Management</li><li>Mobile App</li><li>Only active members billed</li></ul>
    <Btn href={APP} label="Get started free" cls="btn-light" />
  </article>
  <article class="plan pro reveal" style="--d:.1s">
    <img class="plan-bg" src="/assets/izM6Io4LYERFIddIZdCV0bYEH5k.png" alt="" />
    <h4><em>Professional</em></h4>
    <div class="price">Contact Sales</div>
    <p class="muted">per month, billed monthly</p>
    <p class="muted">Growing restaurants Everything in Starter</p>
    <ul><li>Food Safety</li><li>Payroll Reports</li><li>Shift Management</li><li>Maintenance</li><li>Documents</li></ul>
    <Btn href={APP} label="Get started free" cls="btn-dark" />
  </article>
  <article class="plan reveal" style="--d:.2s">
    <h4><em>Enterprise</em></h4>
    <div class="price">Contact Sales</div>
    <p class="muted">per seat / month</p>
    <p class="muted">For growing teams that want shared intelligence, role-based access, and centralized control.</p>
    <ul><li>Restaurant Groups</li><li>Unlimited restaurants</li><li>Multi-location dashboard</li><li>Role permissions</li><li>API</li><li>Custom integrations</li><li>Dedicated onboarding</li><li>Contact Sales</li></ul>
    <Btn href="/contact" label="Talk to sales" cls="btn-light" />
  </article>
</div>
