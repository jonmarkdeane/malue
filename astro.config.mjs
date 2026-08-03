// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonmarkdeane.github.io',
  base: '/malue',
    build: {
    assetsPrefix: './',
  },
    fonts: [{
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter",
  }]
})