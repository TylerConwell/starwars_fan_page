import React from 'react';
import { Link } from 'react-router-dom';
import form_3_background from '../../assets/at_at_down.png';

const Form3 = () => {
  return (
    /* We use page-hero to get the full-screen background and centering */
    <div className="page-hero" style={{ backgroundImage: `url(${form_3_background})` }}>
      
      <div className="content">
        <h1 style={{ color: '#ffe81f' }}>FORM III: Soresu</h1>
        <p>A defensive form that emphasizes precision and control, it became a specialist form for duels with Sith opponents</p>
        
        <div style={{ marginTop: '40px', color: 'white', maxWidth: '600px' }}>
          <p>
            Soresu is a form of lightsaber combat that focuses on tight defensive techniques
            to protect against blaster fire and lightsaber strikes.
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

export default Form3;