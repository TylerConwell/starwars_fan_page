import React from 'react';
import './App.css'; 

// Note: If you have images, place them in the /public folder 
// or import them like: import logo from './logo.png'

function App() {
  return (
    <div className="container">
      {/* NAVBAR SECTION */}
      <header className="navbar">
        <div className="logo">STAR WARS</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#movies">Movies</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>MAY THE FORCE BE WITH YOU</h1>
          <p>Explore the galaxy and discover the power of the Jedi.</p>
          <button className="btn-primary">Explore Now</button>
        </div>
      </section>

      {/* CHARACTERS SECTION (Example of a Grid) */}
      <section className="characters" id="characters">
        <h2>Popular Characters</h2>
        <div className="card-grid">
          <div className="card">
            <img src="./assets/darth_vader_kneeling_wallpaper.jpg" alt="Vader" />
            <h3>Darth Vader</h3>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
}

export default App;