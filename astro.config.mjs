import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build
export default defineConfig({
  site: 'https://fadlidevstudio.my.id',
  base: '/neo-perdana-abadi/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
