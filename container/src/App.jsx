import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdminPanelPage from "./pages/AdminPanelPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-panel" element={<AdminPanelPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
