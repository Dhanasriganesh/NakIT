import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // In local dev, always proxy /api to the local Node server (server.js).
  // PORT comes from .env (default 3001 in your setup).
  const apiPort = (env.PORT || '3001').trim()
  const apiOrigin = `http://localhost:${apiPort}`

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
      // Proxy /api to local backend (server.js) so forms hit:
      //   http://localhost:PORT/api/contact
      //   http://localhost:PORT/api/careers/apply
      proxy: {
        '/api': {
          target: apiOrigin,
          changeOrigin: true,
        },
      },
    },
  }
})
