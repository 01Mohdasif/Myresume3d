import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? "/" : "/Myresume3d/", // Vercel: root, GitHub Pages: repo name
  plugins: [react()],
});

