import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Klientet from '../Klientet/Klientet';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Brands />
      <Klientet />
    </div>
  );
}

export default HomePage;
