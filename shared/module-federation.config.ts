const packageJson = require('./package.json');
const deps = {
  react: packageJson.dependencies.react,
  "react-dom": packageJson.dependencies["react-dom"]
};

export const mfConfig = {
  name: "shared",
  filename: "remoteEntry.js",
  exposes: {
    "./SharedApp": "./src/App",
    // "./Button": "./src/components/Button.tsx",
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
