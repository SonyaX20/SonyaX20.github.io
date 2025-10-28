import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'lottie': ['@lottiefiles/dotlottie-react'],
          'icons': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // 增加警告阈值
  },
  // 优化图片处理
  assetsInlineLimit: 4096, // 小于 4kb 的图片会被内联为 base64
})
