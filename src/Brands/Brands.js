import "./Brands.css";
import clay from "../Fotot/clay-removebg-preview.png";
import sprays from "../Fotot/sprays-removebg-preview.png";

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-left">
        <h2 className="section-title">Markat qe mbajme</h2>
        <p className="brands-desc">
          Ne përdorim vetëm markat më të njohura dhe të besuara në industrinë e kujdesit personal,
          për të garantuar cilësi maksimale në çdo shërbim.
        </p>
      </div>

      <div className="divider"></div>

      <div className="brands-right">
        <div>
          <img src={clay} alt="Totex" className="pic1"/>
          <div className="brand-label">ToteX</div>
        </div>
        <div>
          <img src={sprays} alt="Marmara Barber" />
          <div className="brand-label">Marmara Barber</div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
