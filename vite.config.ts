import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import { URL, fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],

  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true, // Allows using 'describe', 'test', 'expect' without explicit imports
    environment: "jsdom", // Simulates the DOM browser environment
    setupFiles: "./src/test/setup.ts", // Path to setup file (created in next step)
  },
});
