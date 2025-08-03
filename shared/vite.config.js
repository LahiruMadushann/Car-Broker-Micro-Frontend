import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List.jsx",
        "./Input": "./src/components/Input.jsx",
        "./buyerApi": "./src/services/buyer/buyerApi.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.1.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.0",
        },
        "@reduxjs/toolkit": {
          singleton: true,
        },
        "react-redux": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});