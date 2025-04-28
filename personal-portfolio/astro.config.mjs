// @ts-check
import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/server';
import react from '@astrojs/react';
// import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
});

