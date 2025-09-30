import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import tailwindcss from "tailwindcss";
import postcss from 'postcss';
export default defineConfig({
  integrations: [tailwind()],

  
});