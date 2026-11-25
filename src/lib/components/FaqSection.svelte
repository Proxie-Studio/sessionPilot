<script>
  import { base } from '#lib/base.js';
  import Btn from './Btn.svelte';
  import FaqList from './FaqList.svelte';
  let { items } = $props();
</script>

<section class="wrap sec faq">
  <div class="faq-l">
    <span class="eyebrow reveal">FAQ</span>
    <h2 class="h2 reveal" style="--d:.08s">Questions<br />answered.</h2>
    <p class="muted reveal">Still curious?</p>
    <Btn href="{base}/contact" label="Chat with us" extra="btn-sm reveal" />
    <img class="faq-mosaic" src="{base}/assets/qYfpykWvGfava1GqTqLUGEDYak.png" alt="" />
  </div>
  <FaqList {items} />
</section>
