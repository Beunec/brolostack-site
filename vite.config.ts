import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env': JSON.stringify(process.env || {}),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/brolostack')) {
            return 'brolostack-vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'animation-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icon-vendor';
          }
          if (id.includes('node_modules/socket.io-client')) {
            return 'socket-vendor';
          }
          
          // Core library chunks
          if (id.includes('src/lib/')) {
            return 'core-lib';
          }
          
          // Documentation pages chunk
          if (id.includes('src/components/docs/pages/')) {
            return 'docs-pages';
          }
        },
        chunkFileNames: () => {
          return `assets/[name]-[hash].js`;
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase warning threshold
    target: 'es2015', // Better compression
    minify: 'esbuild', // Use esbuild for minification
  },
});
