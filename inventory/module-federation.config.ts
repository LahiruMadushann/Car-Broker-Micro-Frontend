import packageJson from './package.json';
const { dependencies: deps } = packageJson;

export const mfConfig = {
  name: "inventory",
  filename: "remoteEntry.js",
  exposes: {
    "./InventoryApp": "./src/App",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    }
  },
};
