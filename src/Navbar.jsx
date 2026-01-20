import React, { useState } from 'react'; // Import useState
import './navbar.css';
import starwars_logo from './assets/starwars_logo_silver_final.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu toggle

  return (
    <header className="navbar-header">
      <div className="logo-container">
        <img src={starwars_logo} alt="Star Wars" className="nav-logo" />
      </div>

      {/* Hamburger Icon Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar bar-top-open" : "bar"}></span>
        <span className={isOpen ? "bar bar-mid-open" : "bar"}></span>
        <span className={isOpen ? "bar bar-bot-open" : "bar"}></span>
      </button>

      {/* The links will now have a dynamic class based on 'isOpen' */}
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#combat" onClick={() => setIsOpen(false)}>Combat</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;