<script>
  import Split from '#lib/components/Split.svelte';
  import Dots from '#lib/components/Dots.svelte';
  import Cta from '#lib/components/Cta.svelte';

  const rows = [
    ['Restaurant &amp; Branch Management', 'Manage restaurant locations, operating hours, and employee clock-in/out with QR codes from one place.', '6JiUdZoHTEDY1egschwb1JvYt5g.png'],
    ['Weekly Shift Planner', 'Build weekly schedules, assign the right people to each shift, and quickly spot open or unfilled shifts.', 'bLMUV72joObbCT3yZB0PLBmyV8.png'],
    ['Monthly Shift Visibility', 'Get a complete month-at-a-glance view of staffing, planning progress, and upcoming shifts.', '49HcyAWD0fs7RcCJvQl2Qb8n5E4.png'],
    ['Roles &amp; Responsibilities', "Define departments, roles, and responsibilities so every employee knows what they're responsible for.", '6Q9imchKfUM61yVT3syZBNAFhU.png']
  ];
  const minis = [
    ['Attendance &amp; Hours', 'Track clock-ins, working hours, attendance records, and payroll-ready data.', 2],
    ['Daily Checklists', 'Create recurring and one-time checklists to keep daily restaurant routines on track.', 3],
    ['Employee Management', 'Manage employees, roles, pay rates, status, and team information from one place.', 4]
  ];
</script>

<svelte:head><title>Features | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="phero">
    <span class="eyebrow reveal">Features</span>
    <Split text="Built for the work that happens every shift." />
    <p class="reveal" style="--d:.4s">Standardize daily operations, simplify staff management, and keep every restaurant running consistently.</p>
  </div>
  <div class="panel hero-panel reveal"><img src="/assets/S2xkP4y1y0CWBmwndn01fzLwQf0.png" alt="Attendance" /></div>
</section>

<section class="wrap" style="margin-top:90px">
  {#each rows as [t, d, img]}
    <article class="frow reveal">
      <div class="tx"><Dots n={1} /><h3>{@html t}</h3><p>{d}</p></div>
      <div class="pn"><img src="/assets/{img}" alt="" /></div>
    </article>
  {/each}
  <div class="minis">
    {#each minis as [t, d, n], i}
      <article class="mini reveal" style="--d:{i * 0.1}s"><Dots {n} /><div><h3>{@html t}</h3><p>{d}</p></div></article>
    {/each}
  </div>
</section>
<div style="height:90px"></div>

<Cta />
