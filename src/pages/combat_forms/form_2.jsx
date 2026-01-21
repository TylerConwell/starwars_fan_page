import React from 'react';
import { Link } from 'react-router-dom';

const Form2 = () => {
  return (
    /* We use page-hero to get the full-screen background and centering */
    <div className="page-hero" style={{ backgroundColor: '#0a0a0a' }}>
      
      <div className="content">
        <h1 style={{ color: '#ffe81f' }}>FORM II: Makashi</h1>
        <p>A somewhat aggressive, yet also graceful, combat style, it became a specialist form for duels with Sith opponents</p>
        
        <div style={{ marginTop: '40px', color: 'white', maxWidth: '600px' }}>
          <p>
            Makashi is a form of lightsaber combat that emphasizes precision and elegance.
          </p>
        </div>

        {/* This helps the user get back to the menu */}
        <Link to="/combat" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px', color: '#ffe81f' }}>
          BACK TO ARCHIVES
        </Link>
      </div>
    </div>
  );
};

export default Form2;