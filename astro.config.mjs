// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://kaeedev.github.io",
  base: "/Proyecto-9-Header-Personal-Portfolio/",
  devToolbar: {
    enabled:false
  },
  integrations: [tailwind()]
});