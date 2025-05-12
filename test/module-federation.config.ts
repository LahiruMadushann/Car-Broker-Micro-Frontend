import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export const mfConfig = {
  name: "test",
  exposes: {
    "./header": "./src/components/header.tsx"
  },
  shared: ["react", "react-dom"],
  // Add these lines to help with type generation
  filename: "remoteEntry.js",
  typeDefinitions: {
    enabled: true,
    // Specify the output directory for type definitions
    outputPath: "./@mf-types"
  }
};