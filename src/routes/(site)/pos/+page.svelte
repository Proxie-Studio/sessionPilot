<script>
  import { base } from '#lib/base.js';
  import Split from '#lib/components/Split.svelte';
  import Btn from '#lib/components/Btn.svelte';
  import Dots from '#lib/components/Dots.svelte';
  import FaqList from '#lib/components/FaqList.svelte';

  const cards = [
    ['We don’t take a cut of your sales.', 'Flat €150 per machine, per month. Whether you turn over €5k or €50k in a night, our price doesn’t change. Your margins stay yours.', 2],
    ['POS + scheduling + labour cost, together.', 'Every sale feeds straight into your staffing picture. See labour as a percentage of revenue in real time, build rotas against real turnover, and stop guessing who to send home early.', 3],
    ['Nothing down.', 'Payment terminals come through our partner Worldline — no upfront hardware bill, no capital tied up. You’re live in days, not weeks.', 4],
    ['Kiosks and handhelds.', 'Self-service kiosks at the counter, handhelds on the floor. Take orders and payments wherever your guests are.', 4]
  ];
  // NOTE: these answers are written from facts on the page; the originals load on click and weren't in the page source.
  const faq = [
    ['Do you really not charge per transaction?', 'Correct. Session Pilot never takes a percentage of your sales. You pay a flat €150 per machine per month. Card payments are processed by our partner Worldline at a transparent, published rate, and that cost goes to the processor, not to us.'],
    ['What does €150 include?', 'POS software and every update, kiosk and handheld apps, scheduling and labour-cost integration, a payment terminal via Worldline, and onboarding and support.'],
    ['What if I have several terminals?', 'Pricing is per machine, so each terminal is €150 per month. Get in touch and we will put together a setup that fits your floor.'],
    ['Do I need to buy hardware?', 'No. Payment terminals come through our partner Worldline with no upfront hardware bill, so there is no capital tied up and you are live in days, not weeks.'],
    ['Can I use it for both a kiosk and a handheld?', 'Yes. Use self-service kiosks at the counter and handhelds on the floor to take orders and payments wherever your guests are.'],
    ['Is there a contract?', 'Book a short demo and we will walk you through the terms that apply to your venue.'],
    ['Where are you available?', 'Session Pilot is built for horeca and based in Nijmegen. Ask us whether we cover your location.']
  ];
</script>

<svelte:head><title>POS | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="phero" style="padding-bottom:20px">
    <span class="eyebrow reveal">SESSION PILOT POS · FOR HORECA</span>
    <Split text="Run your floor and your team from one platform." style="max-width:560px" />
    <p class="reveal" style="--d:.4s;max-width:470px">A modern POS for restaurants, cafés and bars connected to your scheduling and your labour costs. Flat €150 per machine. Nothing down. And we never take a cut of your sales.</p>
    <div class="btn-row reveal" style="--d:.5s">
      <Btn href="{base}/contact" label="Book a demo" extra="btn-sm" />
      <Btn href="{base}/pricing" label="See pricing" cls="btn-light" extra="btn-sm" />
    </div>
  </div>
  <div class="pos-meta reveal">No percentage on your revenue · Hardware included · Kiosks &amp; handhelds · Built for horeca</div>
</section>

<section class="wrap sec" style="padding-top:100px">
  <div class="sec-head">
    <div>
      <span class="eyebrow reveal">The problem</span>
      <h2 class="h2 reveal" style="--d:.08s;max-width:520px">Most POS systems profit when you do then leave the staffing to you.</h2>
    </div>
    <p class="lead reveal" style="--d:.16s;max-width:350px;font-size:13px">On every card payment, a slice quietly disappears. Your rota lives in one app, your wage bill in a spreadsheet, and none of it talks to the till. Session Pilot POS is the front of your whole operation: sales, staff and labour cost in one place for a price that doesn’t move with your turnover.</p>
  </div>
  <div class="pos-cards">
    {#each cards as [t, d, n], i}
      <article class="pcard reveal" style="--d:{(i % 2) * 0.1}s"><Dots {n} /><div><h4>{t}</h4><p>{d}</p></div></article>
    {/each}
  </div>
</section>

<section class="wrap">
  <div class="dark-band reveal">
    <h2>One price. Everything in.</h2>
    <div class="pr">€150 per machine / month</div>
    <p class="inc">Included: POS software and every update · Kiosk and handheld apps · Scheduling &amp; labour-cost integration · Payment terminal via Worldline · Onboarding and support</p>
    <p class="nos">No setup fee · No upfront hardware · No percentage of your turnover</p>
    <small>Card payments are processed by our partner Worldline at a transparent, published rate. That’s the only per-transaction cost you’ll see and it goes to the processor, not to us.</small>
  </div>
</section>

<section class="wrap">
  <div class="center-blk">
    <h2 class="reveal">The only POS that already knows your staffing.</h2>
    <p class="reveal">Session Pilot started with scheduling, so when a sale hits your till it isn’t just a number  it’s part of the same system that plans your shifts and tracks your wage bill. Watch labour cost against live revenue, catch a slow Tuesday before it costs you, and run the whole operation from one login.</p>
    <div class="reveal"><Btn href="{base}/features" label="See Session Pilot scheduling → €4 per employee / month" cls="btn-light" extra="btn-sm" /></div>
  </div>
</section>

<section class="wrap" style="padding-top:60px">
  <div class="narrow-faq">
    <h2 class="reveal">Questions, answered.</h2>
    <FaqList items={faq} />
  </div>
</section>

<section class="wrap">
  <div class="or-band reveal">
    <h2>See it on your own floor.</h2>
    <p>Book a 20-minute demo and we’ll put your sales and your staffing on one screen.</p>
    <Btn href="{base}/contact" label="Book a demo" extra="btn-sm" />
  </div>
</section>
<div style="height:100px"></div>
