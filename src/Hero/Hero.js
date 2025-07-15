import "./Hero.css"
import logo from "../Fotot/logo-removebg-preview.png"


const Hero = () => {
    return (  
        <section className="hero">
            <div className="hero-content">
                <h1>Enit's Barber Shop</h1>
            </div>
            <img src={logo} alt="" />
        </section>
    );
}
 
export default Hero;