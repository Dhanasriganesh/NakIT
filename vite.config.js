import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiOrigin = (env.VITE_DEV_API || '').trim().replace(/\/api.*$/, '').replace(/\/$/, '')

  return {
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
    server: {
      // Proxy /api to your deployed Vercel app (serverless). Set VITE_DEV_API in .env.
      proxy: apiOrigin
        ? { '/api': { target: apiOrigin, changeOrigin: true } }
        : undefined,
    },
  }
})
