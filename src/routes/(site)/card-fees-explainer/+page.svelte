<script>
  const secs = [
    ['One payment system, built into your POS', 'Your payment system shouldn’t feel like another platform your team has to learn.  With Session Pilot, payments are part of the POS from the start. Orders, bills, transactions, and sales data stay connected, giving your team a simpler way to run service and giving you a clearer picture of performance.'],
    ['Fast, flexible payments', 'Take payments without slowing down the floor. Session Pilot supports the workflows hospitality teams need, from straightforward transactions to split bills and flexible payment handling.'],
    ['Every sale stays connected', 'A completed payment immediately becomes part of your sales data. No exports, spreadsheets, or separate systems to reconcile.'],
    ['One view of your venue', 'See your sales and payment activity alongside staffing and labor costs, giving you the complete picture while you’re trading.']
  ];
  const pricing = [
    ['Transparent', "Know what you're paying for without complicated pricing structures or hidden layers."],
    ['Connected', 'Payments, POS, sales, and reporting all live in the same platform.'],
    ['Built for hospitality', 'Pricing and payment workflows designed around restaurants, cafés, bars, and quick-service venues.']
  ];
  const why = [
    ['One POS', 'Take orders, manage tables, process payments, and track sales from one system.'],
    ['One platform', 'Your POS and staff scheduling work together instead of living in separate apps.'],
    ['One source of truth', 'Sales and labor data stay connected, so your numbers line up automatically.'],
    ['One straightforward plan', 'Everything you need to run your venue, without paying separately for a POS, scheduler, and additional integrations.']
  ];
</script>

<svelte:head><title>Card fees &amp; payment methods | SessionPilot</title></svelte:head>

<section class="wrap cf-wrap">
  <span class="cf-art"><i></i><i></i><i></i></span>
  <div class="cf-by">By Session Pilot · September 2026</div>
  <h1 class="reveal"><span>Card fees &amp; payment methods — an explainer</span></h1>
  <div class="cf-cols">
    <div class="lead-b reveal">Transaction fees include interchange, scheme, and acquirer fees. Session Pilot explains these costs clearly, so hospitality teams can choose the right payment method with confidence.</div>
    <div class="body reveal">
      <p>Every transaction is more than just a sale. It connects your customer, your payment method, your venue, and your reporting.  Session Pilot brings payments directly into your POS, so your team can take payments quickly while every transaction flows straight into the same system that manages your sales, schedules, and labor.  No separate payment tools. No manual reconciliation. Just one connected view of your business.</p>
      {#each secs as [h, p]}<h2>{h}</h2><p>{p}</p>{/each}
      <h2>Understanding payment pricing</h2>
      <p>Payment providers can structure transaction pricing in different ways. Some use a single blended rate, while others separate the underlying card costs from the provider's own fee.<br />The important difference is <b>transparency</b>.<br />Session Pilot is built around straightforward pricing, so you can understand what you're paying for instead of navigating unnecessary complexity.</p>
      <h2>Simple pricing, without the surprises</h2>
      {#each pricing as [a, c]}<p><b>{a}</b><br />{c}</p>{/each}
      <h2>Why Session Pilot?</h2>
      {#each why as [a, c]}<p><b>{a}</b><br />{c}</p>{/each}
    </div>
  </div>
</section>
