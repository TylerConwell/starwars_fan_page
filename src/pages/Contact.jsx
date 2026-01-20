import mustafar_background from '../assets/mustafar_background.jpeg'; // Use a different image here!

const Contact = () => (
  <div className="page-hero" style={{ backgroundImage: `url(${mustafar_background})` }}>
    <div className="content">
      <h1>Contact the Empire today!</h1>
      <p>A long time ago, in a galaxy far, far away...</p>
    </div>
  </div>
);
export default Contact;