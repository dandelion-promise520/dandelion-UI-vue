import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import postcssAdvancedVariables from "postcss-advanced-variables";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    open: true,
  },

  css: {
    postcss: {
      plugins: [postcssAdvancedVariables()],
    },
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
