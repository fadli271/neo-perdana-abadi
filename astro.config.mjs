import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build
export default defineConfig({
  site: 'https://www.neoperdanaabadi.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
