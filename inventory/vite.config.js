import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
          name: 'inventory',
          filename: 'remoteEntry.js',
          exposes: {
            './BuyerDetailsTable': './src/components/buyer/BuyerDetailsTable.jsx'
          },
          shared: ['react', 'react-dom'],
          dev: true,
        })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5003,
    fs: {
    strict: false
  }
  }
})
