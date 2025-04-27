import packageJson from './package.json';
const { dependencies: deps } = packageJson;

export const mfConfig = {
  name: "shared",
  filename: "remoteEntry.js",
  exposes: {
    "./SharedApp": "./src/App",
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
