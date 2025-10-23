import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    minify: "esbuild", // pastikan minify aktif
    sourcemap: false, // matikan sourcemap untuk build production
    cssCodeSplit: true, // pisahkan CSS tiap entry
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Semua library dari node_modules dimasukkan ke vendor chunk
            return "vendor";
          }
        },
      },
    },
  },
});
