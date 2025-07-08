import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/',
  build: {
    outDir: 'docs',
  },
  server: {
    host: "::",      // Listen on all interfaces
    port: 8080,      // Development server port
  },
  plugins: [
    react(),         // React support with SWC compiler
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Path alias for imports
    },
  },
})) 