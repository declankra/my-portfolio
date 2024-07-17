import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Health from './pages/Health';
import BCG from './pages/BCG';
import Goals from './pages/Goals';
import Resume from './pages/Resume';
import Manual from './pages/Manual';
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
ReactGA.initialize('G-YVX9YT52JE');


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="ContentWrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/health" element={<Health />} />
          <Route path="/bcg" element={<BCG />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;