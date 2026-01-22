import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Combat from './pages/Combat.jsx'
import Contact from './pages/Contact.jsx'

import Form1 from './pages/combat_forms/form_1.jsx'
import Form2 from './pages/combat_forms/form_2.jsx'
import Form3 from './pages/combat_forms/form_3.jsx'
import Form4 from './pages/combat_forms/form_4.jsx'
import Form5 from './pages/combat_forms/form_5.jsx'
import Form6 from './pages/combat_forms/form_6.jsx'
import Form7 from './pages/combat_forms/form_7.jsx'

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
          <Route path="/combat/form3" element={<Form3 />} />
          <Route path="/combat/form4" element={<Form4 />} />
          <Route path="/combat/form5" element={<Form5 />} />
          <Route path="/combat/form6" element={<Form6 />} />
          <Route path="/combat/form7" element={<Form7 />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App