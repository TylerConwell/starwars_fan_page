import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Combat from './pages/Combat.jsx'
import Contact from './pages/Contact.jsx'

import Form1 from './pages/combat_forms/form_1.jsx'
import Form2 from './pages/combat_forms/form_2.jsx'

function App() {
  return (
    // 1. The Router must wrap the entire application
    <Router>
      <div className="container">
        
        {/* 2. Place Navbar HERE so it stays at the top of every page */}
        <Navbar />

        {/* 3. Routes will swap the content below the Navbar automatically */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/combat" element={<Combat />} />

          <Route path="/combat/form1" element={<Form1 />} />
          <Route path="/combat/form2" element={<Form2 />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App