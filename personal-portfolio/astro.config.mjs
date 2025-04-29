// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import react from '@astrojs/react';
// import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({}), // Add the adapter with an empty config object
  integrations: [react()],
});

