import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => (
  <div>
    <HomePage />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);