<script>
  import { base } from '#lib/base.js';
  import { LINKEDIN } from '#lib/site.js';
  // [left %, top (px / 1.6), opacity] of the blinking squares behind the big wordmark
  const spots = [[22,2,1],[27,2,.4],[44,5,.6],[49,2,1],[56,9,.5],[63,3,.4],[72,4,.6],[17,40,.5],[34,43,1],[42,45,.4],[51,43,.4],[60,45,.8],[75,45,.4],[86,44,.4]];
</script>

<footer class="foot">
  <div class="wrap">
    <div class="foot-top">
      <a href="{base}/" class="logo"><img src="{base}/assets/LBPIdUJOxnjdmfjUONPoNOlkRg.png" alt="Session Pilot" /></a>
      <div class="social">
        <span>Social media</span>
        <a href={LINKEDIN} aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="#68615a"><path d="M4.5 8.5h3.4V20H4.5zM6.2 3a2 2 0 110 4 2 2 0 010-4zM10 8.5h3.2v1.6c.5-.9 1.7-1.9 3.5-1.9 3.6 0 4.3 2.4 4.3 5.5V20h-3.4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20H10z" /></svg></a>
      </div>
    </div>
    <div class="foot-cols">
      <div><h5>Company</h5><a href="{base}/">About</a><a href="{base}/contact">Contact</a><a href="{base}/">Careers</a></div>
      <div><h5>Legal</h5><a href="{base}/privacy-policy">Privacy Policy</a><a href="{base}/terms-conditions">Terms &amp; Conditions</a></div>
    </div>
    <div class="foot-big">
      <img src="{base}/assets/Fx0xohK8E3p8dyz5LqNG32Hzsx8.png" alt="" />
      <span class="px">
        {#each spots as [l, t, o], i}
          <i style="left:{l}%;top:{t * 1.6}px;opacity:{o};animation-delay:{(i * 0.37) % 3}s;background:{o < 0.6 ? '#f2b265' : '#f48d16'}"></i>
        {/each}
      </span>
      <div class="foot-bot"><span>© 2026 Session pilot</span><a href="{base}/terms-conditions">Terms&amp;Conditions</a></div>
    </div>
  </div>
</footer>
