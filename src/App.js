import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"
import './App.css';

import TagManager from 'react-gtm-module'
// Add google tag manager for GUA 4
const tagManagerArgs = {
  gtmId: 'G-YVX9YT52JE'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;