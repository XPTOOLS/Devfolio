import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3030,
        host: '0.0.0.0',
      },
      preview: {
        port: 3030,
        host: '0.0.0.0',
        allowedHosts: ['devfolio-jxky.onrender.com', '.onrender.com', 'localhost', 'https://imgbb.com']
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
