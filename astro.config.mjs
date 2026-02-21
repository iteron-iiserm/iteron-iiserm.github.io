// @ts-check
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: "https://marshx9.github.io",
  base: "/ITERON/",
  integrations: [github()]
});
