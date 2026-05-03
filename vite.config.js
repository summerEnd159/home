import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      // 确保 Vite 监听本地模块文件变化
      ignored: []
    }
  },
  optimizeDeps: {
    // 强制预构建本地模块（避免开发时频繁 reload）
    include: []
  }
});