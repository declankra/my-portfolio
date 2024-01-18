import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import TagManager from 'react-gtm-module'
// Add google tag manager for GUA 4
const tagManagerArgs = {
  gtmId: 'G-YVX9YT52JE'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;