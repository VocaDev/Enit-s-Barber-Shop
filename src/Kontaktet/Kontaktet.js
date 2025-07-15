import './Kontaktet.css'
import location from "../Fotot/location icon.png"
import phone from "../Fotot/phone icon.png"
import email from "../Fotot/mail icon.png"

const Contacts = () => {
  return (
    <section className='contact-section'>
        <div className='title-section'>
            <h1>Kontaktet</h1>
            <p>Na kontaktoni për çdo pyetje, rezervim apo bashkëpunim. 
Jemi këtu për t’ju ofruar shërbimin më të mirë dhe t’ju ndihmojmë të dukeni në formën tuaj më të mirë. 
Mos hezitoni të na shkruani ose telefononi!</p>
        </div>
        <div className="cards">
            <div className="card1">
                <img src={location} alt="" />
               <p></p>
               <p></p> 
            </div>
        </div>
    </section>
  );
};

export default Contacts;
