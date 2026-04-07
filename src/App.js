import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Help from "./pages/Help";
import Report from "./pages/Report";
import Export from "./pages/Export";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/report" element={<Report />} />
            <Route path="/export" element={<Export />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;