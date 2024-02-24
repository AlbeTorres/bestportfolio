import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), sitemap()],
  site: 'https://albeportfolio.vercel.app'
});