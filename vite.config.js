import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['gsap'],
      output: {
        globals: {
          gsap: 'gsap' // If using the external CDN
        }
      }
    }
  }
})

