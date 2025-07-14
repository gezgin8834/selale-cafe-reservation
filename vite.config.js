// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    basename: "/cafe-reservation-system/", // ✅ doğru base yolu
plugins: [react()],
});