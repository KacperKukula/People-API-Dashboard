import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    /* Include to all scss variables.scss */
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/variables.scss";`,
        includePaths: [path.resolve(__dirname, 'src/styles')],
      },
    },
  },
})
