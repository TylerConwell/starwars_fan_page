import { useState } from 'react'
import background from './assets/darth_vader_kneeling_wallpaper.jpg'
import './App.css'
import Navbar from './Navbar.jsx' // Stay with this import

function App() {
  return (
    <div className="container"> {/* Fixed: className must be camelCase */}
      
      <div style ={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative' // Added to help position the fixed navbar
      }}>

        {/* THIS IS THE KEY: Use the component you built! */}
        <Navbar />

        <div className="hero-content" style={{ color: 'white', paddingTop: '150px', textAlign: 'center' }}>
           {/* <h1>STAR WARS</h1>
           <p>Welcome to the ultimate fan page</p> */}
        </div>
      </div>

    </div>
  )
}

export default App