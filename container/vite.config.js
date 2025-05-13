import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
 plugins: [
    react(),
    federation({
      remotes: {
        remote_app: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
  }
})
