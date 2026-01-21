import { Link } from 'react-router-dom';
import anikan_background from '../assets/anikan_obiwar_mustifar_lightsaber_battle.jpg';

const Combat = () => {
  const forms = [
    { id: 1, name: "Form I" },
    { id: 2, name: "Form II" },
    { id: 3, name: "Form III" },
    { id: 4, name: "Form IV" },
    { id: 5, name: "Form V" },
    { id: 6, name: "Form VI" },
    { id: 7, name: "Form VII" },
  ];

  // YOU MUST HAVE THIS "RETURN" WORD HERE:
  return (
    <div className="page-hero" style={{ backgroundImage: `url(${anikan_background})` }}>
      <div className="content">
        <h1>Learn Lightsaber Combat</h1>
        <p>Master the art of lightsaber combat with our expert guides and tutorials.</p>
      </div>

      <div className="forms-grid">
        {forms.map((form) => (
          /* Notice: to="/combat/form1" matches your App.jsx routes */
          <Link to={`/combat/form${form.id}`} key={form.id} className="form-card">
            <h3>{form.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Combat;