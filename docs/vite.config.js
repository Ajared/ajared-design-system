import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ajared-design-system/' : '/',
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'getting-started': resolve(__dirname, 'pages/getting-started.html'),
        tokens: resolve(__dirname, 'pages/tokens.html'),
        components: resolve(__dirname, 'pages/components.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
