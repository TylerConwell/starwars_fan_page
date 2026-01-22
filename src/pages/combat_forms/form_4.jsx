import React from 'react';
import { Link } from 'react-router-dom';
import form_4_background from '../../assets/tatooine_building.png';

const Form4 = () => {
  return (
    /* We use page-hero to get the full-screen background and centering */
    <div className="page-hero" style={{ backgroundImage: `url(${form_4_background})` }}>
    
      <div className="content">
        <h1 style={{ color: '#ffe81f' }}>FORM IV: Shien</h1>
        <p>A form that emphasizes aggressive defense and counter-attacks, it became a specialist form for duels with Sith opponents</p>

        <div style={{ marginTop: '40px', color: 'white', maxWidth: '600px' }}>
          <p>
            Shien is a form of lightsaber combat that focuses on aggressive defense and counter-attacks
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

export default Form4;