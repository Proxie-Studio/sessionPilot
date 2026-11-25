<script>
  import { onLoadIn } from '#lib/actions.js';
  /**
   * Headline with a word-by-word mask reveal. `em` renders an italic lead-in line
   * (used on the contact page), `text` is the regular part.
   */
  let { text, em = '', tag = 'h1', style = '' } = $props();
  const words = (s) => s.trim().split(/\s+/).filter(Boolean);
  const emWords = $derived(words(em));
  const base = $derived(emWords.length);
</script>

<svelte:element this={tag} class="split" {style} use:onLoadIn>
  {#if em}<em>{#each emWords as w, i}<span class="w"><span style="--i:{i}">{w}</span></span>{' '}{/each}</em><br />{/if}
  {#each words(text) as w, i}<span class="w"><span style="--i:{base + i}">{w}</span></span>{' '}{/each}
</svelte:element>
