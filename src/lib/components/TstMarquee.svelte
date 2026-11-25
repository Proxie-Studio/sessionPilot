<script>
  import { base } from '#lib/base.js';
  import { marquee } from '#lib/actions.js';
  const items = [
    ['Before SessionPilot OPS we managed everything using paper checklists. Now every restaurant follows the same standards.', 'Savle5DZHOWqtAcOxHiJI3UY.png', 'James R.', 'Operations Manager'],
    ['We reduced missed opening tasks by over 90%', 'XFKsIZRI4mxNoJj3C4tv0S9qk.png', 'Sophie K.', 'Restaurant Owner'],
    ['Our payroll preparation now takes minutes instead of hours.', 'FcQKk42EHfLdnZvoj6ItkuQFQ.png', 'Daniel M.', 'HR Manager']
  ];
</script>

<div class="marquee tst">
  <div class="track" use:marquee={{ secs: 45, gap: 16, pauseOnHover: true }}>
    {#each items as [q, img, name, role]}
      <figure class="t">
        <blockquote>{q}</blockquote>
        <figcaption><img src="{base}/assets/{img}" alt="" /><div><b>{name}</b><span>{role}</span></div></figcaption>
        <a href="{base}/testimonials">Read on</a>
      </figure>
    {/each}
  </div>
</div>
