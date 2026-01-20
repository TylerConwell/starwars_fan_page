import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import background from './assets/darth_vader_kneeling_wallpaper.jpg'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Combat from './pages/Combat.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="container"> {/* Fixed: className must be camelCase */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Combat" element={<Combat />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
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