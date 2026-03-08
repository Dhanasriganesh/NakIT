import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      logStats: true,
      png: { quality: 85, compressionLevel: 9 },
      jpeg: { quality: 85 },
      jpg: { quality: 85 },
    }),
  ],
})
