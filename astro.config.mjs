import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build
export default defineConfig({
  site: 'https://fadli271.github.io',
  base: '/neo-perdana-abadi',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
