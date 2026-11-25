<script>
  import { page } from '$app/state';
  import { base } from '#lib/base.js';
  import Header from '#lib/components/Header.svelte';
  import Footer from '#lib/components/Footer.svelte';

  let { children } = $props();
</script>

<div class={page.url.pathname.slice(base.length).replace(/\/$/, '') === '' ? 'home' : 'inner'}>
  <Header />
  <main id="top">
    {@render children()}
  </main>
  <Footer />
</div>
