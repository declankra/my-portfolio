import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </div>
    );
}

export default Navbar;