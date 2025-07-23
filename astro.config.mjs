// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel"; // Correct import (not /serverless)
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [react(), tailwind()],
});

