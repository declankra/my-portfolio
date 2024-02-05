import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <li><NavLink to="/projects"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'}>
                Projects</NavLink></li>
            <li><NavLink to="/" 
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'}>
                Home</NavLink></li>
            <li><NavLink to="/contact" 
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'}>
                Contact</NavLink></li>
        </div>
    );
}

export default Navbar;
