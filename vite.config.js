// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Selale Cafe/", // bu satır da önemli!
  build: {
    outDir: "build",
  },
  server: {
    historyApiFallback: true
  }
})
