# SessionPilot – SvelteKit version

Svelte 5 + SvelteKit 3, prerendered to a fully static site (`@sveltejs/adapter-static`).

    npm install
    npm run dev       # dev server
    npm run build     # static output in build/
    npm run preview   # serve build/ locally (needed: links are root-relative, so don't open the files directly)

## Layout
- `src/routes/(site)/`  pages that share the header + footer (home, industries, features, pos, pricing, contact, testimonials, article, article/[slug], product pages, legal)
- `src/routes/(bare)/`  waitlist + thank-you (no header/footer)
- `src/routes/+error.svelte`  the 404 page
- `src/lib/components/`  Header, Footer, Cta, Btn, Split (headline reveal), Plans (billing toggle), FaqList, TstMarquee, ProductPage, Legal …
- `src/lib/actions.js`  `marquee`, `countUp`, scroll-reveal helpers
- `src/lib/data/`  articles / privacy / terms JSON, product page content
- `src/app.css`  global styles (carried over unchanged from the HTML version)
