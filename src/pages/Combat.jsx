import anikan_background from '../assets/anikan_obiwar_mustifar_lightsaber_battle.jpg'; // Use a different image here!

const Combat = () => (
  <div className="page-hero" style={{ backgroundImage: `url(${anikan_background})` }}>
    <div className="content">
      <h1>Learn Lightsaber Combat</h1>
      <p>Master the art of lightsaber combat with our expert guides and tutorials.</p>
    </div>
  </div>
);
export default Combat;