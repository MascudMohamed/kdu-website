import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'kduweb.serveousercontent.com',  
      '.serveousercontent.com',       
    ],
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost/kdu-backend/public',
        changeOrigin: true,
      },
      '/media': {
        target: 'http://localhost/kdu-backend/public',
        changeOrigin: true,
      },
    },
  },
});