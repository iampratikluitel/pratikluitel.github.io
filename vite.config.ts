import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/", // Keep this as root for personal GitHub Pages
  build: {
    outDir: "docs",
    emptyOutDir: true, // Add this to clear the docs folder on each build
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
