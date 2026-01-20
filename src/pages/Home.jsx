import background from '../assets/darth_vader_kneeling_wallpaper.jpg';

const Home = () => (
  <div className="page-hero" style={{ backgroundImage: `url(${background})` }}>
    <div className="content">
      <h1>THE DARK SIDE</h1>
      <p>Welcome to the Empire.</p>
    </div>
  </div>
);
export default Home;