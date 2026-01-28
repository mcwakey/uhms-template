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
      moment: 'moment/moment.js'
    },
  },
  server: {
    port: 3000 // Development server port
  },
  base: '/',
  
  // Performance optimizations
  build: {
    // Enable source maps for production debugging (optional - disable for smaller builds)
    sourcemap: false,
    
    // Increase chunk size warning limit (500kb default is too low for enterprise apps)
    chunkSizeWarningLimit: 1000,
    
    // Manual chunking strategy for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk - core libraries that rarely change
          'vendor-vue': ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate'],
          
          // UI frameworks - large and stable
          'vendor-ui': ['ant-design-vue', 'bootstrap', 'vue-toastification'],
          
          // Charts and visualizations
          'vendor-charts': ['vue3-apexcharts', '@j-t-mcc/vue3-chartjs'],
          
          // Form libraries
          'vendor-forms': ['vee-validate', 'yup', 'vue-multiselect', 'vue3-datepicker'],
          
          // Calendar and date
          'vendor-calendar': ['@fullcalendar/vue3', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', 'v-calendar'],
          
          // Icons - separate chunk since they're loaded conditionally
          'vendor-icons': ['@fortawesome/fontawesome-free', 'bootstrap-icons', 'vue-feather'],
          
          // Utilities
          'vendor-utils': ['axios', 'jwt-decode', 'quill'],
        },
      },
    },
    
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Reduce the number of CSS chunks
    cssMinify: true,
  },
  
  // Optimization options
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'ant-design-vue',
      'bootstrap',
      'vue-toastification',
    ],
    exclude: [
      // Exclude large optional dependencies
      '@vue-leaflet/vue-leaflet',
      'leaflet',
    ],
  },
})
