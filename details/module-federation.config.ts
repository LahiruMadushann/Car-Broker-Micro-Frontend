export const mfConfig = {
  name: "details",
  filename: "remoteEntry.js",
  
  exposes: { 
    "./App": "./src/App.tsx" 
  },
  
  shared: ["react", "react-dom"],
  
  // Add DTS plugin configuration
  library: { type: "var", name: "details" },
  remotes: {},
};