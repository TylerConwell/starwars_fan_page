import React from 'react';
import { Link } from 'react-router-dom';

const Form1 = () => {
  return (
    /* We use page-hero to get the full-screen background and centering */
    <div className="page-hero" style={{ backgroundColor: '#0a0a0a' }}>
      
      <div className="content">
        <h1 style={{ color: '#ffe81f' }}>FORM I: SHII-CHO</h1>
        <p>The Way of the Sarlacc - The Determination Form.</p>
        
        <div style={{ marginTop: '40px', color: 'white', maxWidth: '600px' }}>
          <p>
            Shii-Cho is the most ancient style of lightsaber combat, 
            developed as the Jedi transitioned from metal swords to lightsabers.
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

export default Form1;