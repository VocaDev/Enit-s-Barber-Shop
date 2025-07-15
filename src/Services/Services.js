import scissorsIcon from "../Fotot/icon scissors.png";
import shaveIcon from "../Fotot/icon razor.png";
import faceIcon from "../Fotot/icon beard.png";
import bg from "../Fotot/Services bcg.png";
import "./Services.css"; 

const Services = () => {
  return (
    <section className="services-section" style={{ backgroundImage: `url(${bg})` }}>
      <p className="section-subtitle">Trajtimet tona</p>
      <h2 className="section-title">Sherbimet</h2>

      <div className="services-grid">
        <div className="service-card">
          <img src={scissorsIcon} alt="Preje Flokësh" className="icon" />
          <h3>Preje Flokësh</h3>
          <p>Shërbimi i plotë për flokët, me kujdes profesional dhe stil modern.</p>
        </div>

        <div className="service-card">
          <img src={shaveIcon} alt="Rruajtje" className="icon" />
          <h3>Rruajtje</h3>
          <p>Për një pamje të freskët dhe të pastër, kombinim perfekt i rruajtjes tradicionale me prerjen e flokëve.</p>
        </div>

        <div className="service-card">
          <img src={faceIcon} alt="Pastrimi Fytyrës" className="icon" />
          <h3>Pastrim Fytyre</h3>
          <p>Trajtim relaksues për lëkurën dhe rruajtje profesionale për një ndjesi të pastër.</p>
        </div>
      </div>

      <button>Shiko me shume</button>
    </section>
  );
};

export default Services;
