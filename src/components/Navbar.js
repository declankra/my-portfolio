import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
        <li><NavLink to="/" class activeStyle>Home</NavLink></li>
        <li><NavLink to="/Projects" class activeStyle>Projects</NavLink></li>
        <li><NavLink to="/Contact" class activeStyle>Contact</NavLink></li>
    </div>
    
  );
};

export default Navbar;