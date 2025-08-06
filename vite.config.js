// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    optimizeDeps: {
    exclude: ['face-api.js'],
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      external: [
        'face-api.js' // << Модульді external ретінде қосамыз
      ]
    }
  }
})
