import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Root user site (stevekim-ai.github.io) — served at domain root, no base path.
export default defineConfig({
  site: 'https://stevekim-ai.github.io',
  integrations: [sitemap()],
});
