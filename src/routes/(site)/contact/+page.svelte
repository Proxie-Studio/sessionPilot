<script>
  import { base } from '#lib/base.js';
  import Split from '#lib/components/Split.svelte';
  import FaqSection from '#lib/components/FaqSection.svelte';
  import Cta from '#lib/components/Cta.svelte';

  // Front-end only: shows a confirmation, nothing is sent anywhere.
  let sent = $state(false);
  function submit(e) {
    e.preventDefault();
    sent = true;
    e.currentTarget.reset();
  }

  const faq = [
    ['How is SessionPilot Ops different from othe scheduling application?', 'SessionPilot Ops brings scheduling together with checklists, SOPs, attendance and payroll-ready reports, so your whole operation lives in one platform.'],
    ['How do you calculate the monthly invoice amount?', 'Pricing is simple and transparent, and only active members are billed. See our pricing page for the details.'],
    ['Can I try SessionPilot Ops for free?', 'Yes. Start free, or join the 30-day free trial.'],
    ['How long does setup take?', 'Most restaurants are up and running in days, not months.'],
    ['How do I import team members from our HR system into SessionPilot Ops?', 'Get in touch and we will help you bring your team across.']
  ];
</script>

<svelte:head><title>Contact | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="chero">
    <span class="eyebrow reveal">Contact us</span>
    <Split em="Let's talk —" text="about the work nobody wants to do" />
    <p class="reveal" style="--d:.4s">Book a demo, ask a question, or send a hard problem. A human responds — most under four hours, never longer than one business day.</p>
  </div>
  <div class="cgrid">
    <div class="ccards">
      <div class="ccard reveal">
        <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
        <h4>Email us directly</h4>
        <p>For sales, partnerships, or anything sensitive. Goes to a small inbox - not a queue</p>
        <a href="mailto:sessionpilot@gmail.com">sessionpilot@gmail.com</a>
      </div>
      <div class="ccard reveal" style="--d:.1s">
        <svg viewBox="0 0 24 24"><path d="M12 4l1.5 3H17l-2.5 2.5L15.5 13 12 11l-3.5 2 1-3.5L7 7h3.5z" /></svg>
        <h4>Press &amp; parnerships</h4>
        <p>Coverage, integrations, co-marketing, or a story you think we should hear.</p>
        <a href="mailto:sessionpilot@gmail.com">sessionpilot@gmail.com</a>
      </div>
      <div class="ccard reveal" style="--d:.2s">
        <svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
        <h4>Nijmegen</h4>
        <p style="font-size:12px">Jonkerbosplein 52, 6534 AB Nijmegen</p>
      </div>
    </div>
    <div class="fwrap reveal">
      <img src="{base}/assets/bONasUf3RJutHAw3vCeGWCCH6w.png" alt="" />
      <form class="form" class:sent onsubmit={submit}>
        <label for="fn">First name</label><input id="fn" placeholder="Sarah" required />
        <label for="em">Work email</label><input id="em" type="email" placeholder="sarah@company.com" required />
        <label for="co">Company</label><input id="co" placeholder="Notion Labs" />
        <label for="ms">Your message</label><textarea id="ms" placeholder="Drop your message"></textarea>
        <button type="submit" class="btn btn-dark btn-sm">
          <span class="ico"><svg viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" /></svg></span><span class="lbl">Send your message</span>
        </button>
        <span class="ok">Thanks! We'll get back to you shortly.</span>
      </form>
    </div>
  </div>
</section>

<FaqSection items={faq} />
<Cta />
