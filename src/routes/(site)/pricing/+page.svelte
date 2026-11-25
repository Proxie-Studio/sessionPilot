<script>
  import SecHead from '#lib/components/SecHead.svelte';
  import Plans from '#lib/components/Plans.svelte';
  import TstMarquee from '#lib/components/TstMarquee.svelte';
  import FaqSection from '#lib/components/FaqSection.svelte';
  import Cta from '#lib/components/Cta.svelte';

  // Comparison table: groups of rows; a cell is a string (pill), true (included) or false (not included).
  const groups = [
    ['Core features', [['Restaurants', 'One', 'Multiple', 'Unlimited'], ['Employees', 'Up to 10', 'More employees', 'Unlimited']]],
    ['Staff &amp; Operations', [['Shift management', '30 days', 'Forever', 'Forever'], ['Attendance', false, true, true], ['Payroll reports', false, true, true]]],
    ['Management', [['Email + calendar workflows', true, true, true], ['Analytics', false, true, true], ['Multi-location dashboard', false, true, true]]],
    ['Team', [['Team members', 'One', 'Upto 10', 'Unlimited'], ['Admin dashboard', false, false, true], ['Centralized billing', false, false, true]]]
  ];
  const faq = [
    ['Does SessionPilot replace paper checklists?', 'Yes. Digital opening and closing checklists replace paper entirely, with completion tracked in real time for every shift.'],
    ['Is my restaurant data safe with SessionPilot?', 'You own your data and we do not sell it. See our Privacy Policy for how personal data is processed and protected.'],
    ['What happens if a task is missed?', 'Managers get instant visibility into what is done, what is pending and what needs attention, so missed tasks are spotted straight away.'],
    ['How long does setup take?', 'Most restaurants are up and running in days, not months.'],
    ['Can I customize workflows without code?', 'Yes. Checklists, routines and procedures are configured in the app, no code required.']
  ];
</script>

<svelte:head><title>Pricing | SessionPilot</title></svelte:head>

<section class="wrap" style="padding-top:60px">
  <SecHead eyebrow="Pricing" title="Simple, transparent pricing. <em>No surprises.</em>" lead="Start free, scale as you grow. Every plan includes core features — upgrade when you need more power or seats." />
  <Plans />
</section>

<section class="wrap sec" style="padding-top:130px">
  <SecHead eyebrow="Comparison table" title="Everything you need to run better." lead="Every plan includes the tools you need to run daily operations. Choose the level of control that fits your restaurant." />
  <div class="cmp-grid cmp reveal">
    <div></div>
    <div class="th"><h4>Solo</h4><p>Ideal for AI beginners. No credit card needed.</p></div>
    <div class="th"><h4>Pro</h4><p>Full Parley for pros seeking a real AI partner.</p></div>
    <div class="th"><h4>Teams</h4><p>For teams needing shared insights</p></div>
    {#each groups as [name, rows]}
      <div class="grp">{@html name}</div>
      {#each rows as [label, ...cells]}
        <div class="rl">{label}</div>
        {#each cells as c}
          {#if typeof c === 'string'}<span class="c txt">{c}</span>{:else}<span class="c" class:yes={c} class:no={!c}></span>{/if}
        {/each}
      {/each}
    {/each}
  </div>
</section>

<section class="sec" style="padding-top:130px">
  <div class="center-head wrap">
    <span class="eyebrow reveal">What people say</span>
    <h2 class="h2 reveal" style="--d:.08s;max-width:600px">Teams that run with SessionPilot, not around it</h2>
    <p class="lead2 reveal" style="max-width:330px;font-size:13px;line-height:1.3">From independent restaurants to growing groups here's what restaurant teams have to say after making SessionPilot part of their daily operations.</p>
  </div>
  <div class="wrap"><TstMarquee /></div>
</section>

<FaqSection items={faq} />
<Cta />
