import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [NEEDS CONFIRMATION: production domain. Placeholder is the current live WP domain — the new build will assume this at cutover per docs/part-2-implementation/03-staging-and-launch.md]
export default defineConfig({
  site: 'https://lifestorywp.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
