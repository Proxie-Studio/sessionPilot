import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

// GitHub Pages project site is served from /<repo-name>; CI sets BASE_PATH.
const base = process.env.BASE_PATH ?? '';

export default defineConfig({
  define: { __BASE_PATH__: JSON.stringify(base) },
  plugins: [
    sveltekit({
      // Fully prerendered static site; unknown URLs fall back to 404.html
      adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html', strict: false }),
      paths: { base }
    })
  ]
});
