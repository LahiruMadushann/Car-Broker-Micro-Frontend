import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/store/store.js",
        "./buyerApi": "./src/services/buyer/buyerApi.js",
      },
      shared: {
        react: { 
          singleton: true, 
          requiredVersion: '^18.0.0',
          eager: true
        },
        'react-dom': { 
          singleton: true, 
          requiredVersion: '^18.0.0',
          eager: true
        },
        'react-redux': { 
          singleton: true, 
          requiredVersion: '^8.0.0',
          eager: true
        },
        '@reduxjs/toolkit': { 
          singleton: true, 
          requiredVersion: '^1.9.0',
          eager: true
        }
      }
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
});