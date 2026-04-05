import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 5183,
    strictPort: true,
    allowedHosts: true,
  },

  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion') || id.includes('/motion/')) return 'framer-motion'
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('@splinetool')) return 'spline'
          // Keep all remaining node_modules in ONE chunk to avoid circular deps
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
