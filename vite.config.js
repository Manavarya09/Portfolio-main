import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-main/',
  build: {
    sourcemap: false, // Disable source maps in production
  },
})
