import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate'],
          'vendor-antd': ['ant-design-vue'],
          'vendor-utils': ['axios', 'jwt-decode', 'yup', 'vee-validate', 'vue-i18n'],
          'vendor-calendar': ['@fullcalendar/daygrid', '@fullcalendar/interaction', '@fullcalendar/timegrid', '@fullcalendar/vue3'],
        },
      },
    },
  },
})
