import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Klientet from '../Klientet/Klientet';
import Contacts from '../Kontaktet/Kontaktet';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Brands />
      <Klientet />
      <Contacts />
    </div>
  );
}

export default HomePage;
