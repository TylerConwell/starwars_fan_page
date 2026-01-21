const Form1 = () => (
  <div className="page-hero" style={{ background: '#050505' }}>
    <div className="content">
      <h1 className="yellow-glow">FORM I: SHII-CHO</h1>
      <p style={{ maxWidth: '600px' }}>
        Shii-Cho is the most ancient style of lightsaber combat...
      </p>
      <Link to="/combat" className="submit-btn" style={{ textDecoration: 'none' }}>
        BACK TO ARCHIVES
      </Link>
    </div>
  </div>
);

export default Form1;