import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // włącza test/expect/it globalnie
    environment: 'jsdom',    // <- to kluczowe dla React Testing Library
    setupFiles: './vitest.setup.js', // opcjonalnie, np. dla jest-dom
  },
})
