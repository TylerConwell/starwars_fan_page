import mustafar_background from '../assets/mustafar_background.jpeg';

const Contact = () => (
  <div className="page-hero" style={{ backgroundImage: `url(${mustafar_background})` }}>
    {/* Overlay to make the lava background darker so text pops */}
    <div className="overlay"></div>

    <div className="contact-container">
      <div className="content">
        <h1>JOIN THE EMPIRE</h1>
        <p>Report rebel activity or apply for the Academy.</p>
      </div>

      <div className="contact-box">
        <form>
          <div className="input-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" placeholder="Your name.." />
          </div>

          <div className="input-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder="Your last name.." />
          </div>

          <div className="input-group">
            <label htmlFor="country">Planet</label>
            <select id="country">
              <option value="naboo">Naboo</option>
              <option value="tatooine">Tatooine</option>
              <option value="mustafar">Mustafar</option>
              <option value="coruscant">Coruscant</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Message</label>
            <textarea id="subject" placeholder="Interrogate a rebel..." style={{ height: '120px' }}></textarea>
          </div>

          <input type="submit" value="TRANSMIT DATA" className="submit-btn" />
        </form>
      </div>
    </div>
  </div>
);

export default Contact;