import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  resolve: {
    alias: {
      // Remove this if using Vite 3+ (it's handled automatically)
      // 'react-router-dom': 'react-router-dom/dist/index.js',
    }
  },
  optimizeDeps: {
    include: ['react-router-dom', 'react-toastify', 'axios']
  },
  build: {
    rollupOptions: {
      // Only externalize for SSR or specific cases
      // external: ['react-router-dom', 'react-toastify', 'axios']
    }
  }
})