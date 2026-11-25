import { error } from '@sveltejs/kit';
import articles from '#lib/data/articles.json';

// Tell the static adapter which article pages to prerender.
export const entries = () => articles.map((a) => ({ slug: a.slug }));

export function load({ params }) {
  const idx = articles.findIndex((a) => a.slug === params.slug);
  if (idx < 0) error(404, 'Article not found');
  const article = articles[idx];
  const related = articles.filter((a) => a.slug !== params.slug).slice(0, 2);
  return { article, related };
}
