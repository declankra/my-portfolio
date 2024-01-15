import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

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
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;