import React, { useState } from 'react';
import './navbar.css';
import starwars_logo from './assets/starwars_logo_silver_final.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu toggle

  return (
    <header className="navbar-header">
      <div className="logo-container">
        <Link to="/">
          <img src={starwars_logo} alt="Star Wars Home" className="nav-logo" />
        </Link>
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
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/combat" onClick={() => setIsOpen(false)}>Combat</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;