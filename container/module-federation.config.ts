import packageJson from './package.json';
const { dependencies: deps } = packageJson;

export const mfConfig = {
  name: "container",
  remotes: {
    inventory: "inventory@http://localhost:3001/remoteEntry.js",
    carDetails: "carDetails@http://localhost:3002/remoteEntry.js",
    checkout: "checkout@http://localhost:3003/remoteEntry.js"
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