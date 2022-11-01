import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Catalogue from "./pages/Catalogue/Catalogue";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-catalouge" element={<Catalogue />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
