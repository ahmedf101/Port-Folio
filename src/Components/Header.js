import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 



function Header() {
  return (
    <header className="header">
      <nav className="navbar">
      <li  className='nav-item'><Link to="/">Home</Link></li>
        <li  className='nav-item'><Link to="/about">About</Link></li>
        <li  className='nav-item'><Link to="/technologies">Technologies </Link></li>
        <li  className='nav-item'><Link to="/project">Project </Link></li>
        <li  className='nav-item'><Link to="/contact">Contact</Link> </li> 
        
      </nav>
    <img src="Header-icons.png" alt="Header Icons"  className='header-icon'/>

    </header>
);

};

export default Header;



