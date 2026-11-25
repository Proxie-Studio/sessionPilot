<script>
  import { base } from '#lib/base.js';
  import Split from '#lib/components/Split.svelte';
</script>

<svelte:head><title>Testimonials | SessionPilot</title></svelte:head>

<section class="wrap">
  <div class="vhero">
    <span class="eb reveal">Testimonials</span>
    <Split text="Hear it from the people running the floor." />
    <p class="reveal" style="--d:.3s">Short stories from hospitality teams using Session Pilot to make scheduling, staffing, and daily operations easier.</p>
  </div>
  <article class="vcard reveal">
    <video src="{base}/assets/beKnBi071kBggvnE51edbT82AAQ.mp4" controls preload="metadata" playsinline>
      <track kind="captions" />
    </video>
    <h2>Scheduling two busy locations just got effortless.</h2>
    <p>Hear how Lorenzo at Surya keeps two busy locations and up to 40 team members running smoothly without ever switching systems. From effortless QR code clock-ins to fast, hands-on customer support that turns around custom requests in hours, see how one platform simplifies his entire day-to-day.</p>
  </article>
</section>
<div style="height:120px"></div>
