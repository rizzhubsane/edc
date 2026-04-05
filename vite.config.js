import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Gzip for older servers
    compression({ algorithm: 'gzip', exclude: [/\.(png|jpe?g|gif|webp|svg|woff2?)$/i] }),
    // Brotli for modern servers / Cloudflare Pages
    compression({ algorithm: 'brotliCompress', exclude: [/\.(png|jpe?g|gif|webp|svg|woff2?)$/i] }),
  ],

  server: {
    port: 5183,
    strictPort: true,
    allowedHosts: true,
  },

  build: {
    // Raise the warning limit — our images are intentionally larger
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor libraries into separate cacheable chunks
        manualChunks(id) {
          // Heavy animation libraries get their own chunk
          if (id.includes('framer-motion') || id.includes('motion')) {
            return 'framer-motion'
          }
          if (id.includes('gsap')) {
            return 'gsap'
          }
          // Spline is huge — isolate it
          if (id.includes('@splinetool')) {
            return 'spline'
          }
          // General React ecosystem
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // All other node_modules go in a shared vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
