import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationBanner from './components/NotificationBanner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Health from './pages/Health';
import BCG from './pages/BCG';
import Goals from './pages/Goals';
import Resume from './pages/Resume';
import Manual from './pages/Manual';
import ReactGA from "react-ga4";
import TitleManager from './components/TitleManager';
import RedirectDialog from './components/RedirectDialog';
ReactGA.initialize('G-YVX9YT52JE');

// If a route is not found in the routeTitles object, it will default to just 'Declan Kramper'.

function App() {
  return (
    <div className="App">
      <RedirectDialog />
      <NotificationBanner />
      <TitleManager> 
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
      </TitleManager>
    </div>
  );
}

export default App;