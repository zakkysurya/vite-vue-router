import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Vite plugin for Vue.js
  dedupe: ["vue"], // digunakan, mencegah beberapa versi Vue di-bundle.
  resolve: {
    // Define alias for components
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
