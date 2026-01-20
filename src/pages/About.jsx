import side_background from '../assets/darth_vader_side_profile_wall_paper.png'; // Use a different image here!

const About = () => (
  <div className="page-hero" style={{ backgroundImage: `url(${side_background})` }}>
    <div className="content">
      <h1>OUR GALAXY</h1>
      <p>A long time ago, in a galaxy far, far away...</p>
    </div>
  </div>
);
export default About;