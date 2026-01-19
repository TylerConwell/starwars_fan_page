import { useState } from 'react'
import background from './assets/darth_vader_kneeling_wallpaper.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="hero-container" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`,
      }}>
        
        {/* HEADER SECTION */}
        <header className="header">
          <div className="logo">STAR <span>WARS</span></div>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#characters">Characters</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <div className="content">
          <h1>MAY THE FORCE</h1>
          <p>BE WITH YOU</p>
          <button className="main-btn">EXPLORE GALAXY</button>
        </div>

      </div>
    </>
  )
}

export default App