import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import typography from '@tailwindcss/typography';
export default defineConfig({
  plugins: [tailwindcss(), svgr(), typography],
});
