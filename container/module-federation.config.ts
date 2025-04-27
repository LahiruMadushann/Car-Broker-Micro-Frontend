const packageJson = require('./package.json');
const deps = {
  react: packageJson.dependencies.react,
  "react-dom": packageJson.dependencies["react-dom"]
};

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