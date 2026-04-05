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
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion') || id.includes('/motion/')) return 'framer-motion'
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('@splinetool')) return 'spline'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react-vendor'
          if (id.includes('react-router')) return 'router'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
