<script>
  import { page } from '$app/state';
  import { NAV, APP } from '#lib/site.js';
  import Btn from './Btn.svelte';

  let scrolled = $state(false);
  const path = $derived(page.url.pathname.replace(/\/$/, '') || '/');
  // Industry sub-pages highlight "Industries", card fees highlights "POS"
  const current = $derived(
    ['/restaurants', '/hotels', '/hospitality'].includes(path)
      ? '/industries'
      : path === '/card-fees-explainer'
        ? '/pos'
        : path.startsWith('/article')
          ? '/article'
          : path
  );
</script>

<svelte:window onscroll={() => (scrolled = scrollY > 40)} />

<header class="nav" class:scrolled>
  <div class="wrap nav-in">
    <a href="/" class="logo"><img src="/assets/LBPIdUJOxnjdmfjUONPoNOlkRg.png" alt="Session Pilot" /></a>
    <nav class="links">
      {#each NAV as n, i}
        {#if i}<i></i>{/if}
        {#if n.children}
          <!-- Opens on hover and on keyboard focus (focus-within) -->
          <div class="dd">
            <a href={n.href} class:cur={current === n.href} aria-haspopup="true">{n.label}</a>
            <div class="dd-menu">
              <ul>
                {#each n.children as c}
                  <li><a href={c.href} class:on={path === c.href}>{c.label}</a></li>
                {/each}
              </ul>
            </div>
          </div>
        {:else}
          <a href={n.href} class:cur={current === n.href}>{n.label}</a>
        {/if}
      {/each}
    </nav>
    <Btn href={APP} label="Customer Login" extra="btn-sm" />
  </div>
</header>
