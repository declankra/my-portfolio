import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
    </div>
    
  );
};

export default Navbar;