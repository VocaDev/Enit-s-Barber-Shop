import "./Klientet.css";
import pic1 from "../Fotot/pic1.png";
import pic2 from "../Fotot/pic2.png";
import pic3 from "../Fotot/pic3.png";
import pic4 from "../Fotot/pic4.png";
import pic5 from "../Fotot/pic5.png";
import pic6 from "../Fotot/pic6.png";

const Klientet = () => {
    return ( 
        <section className="klientat">
            <h2>Klientet Tane</h2>
            <div className="slider" style={{
                    '--width': '340px',
                    '--height': '450px',
                    '--width-mobile': '120px',
                    '--height-mobile': '150px',
                    '--quantity': '5',
                }}>
                <div className="list">
                    <div className="iteam" style={{"--position": "1"}}><img src={pic1} alt="" /></div>
                    <div className="iteam" style={{"--position": "2"}}><img src={pic2} alt="" /></div>
                    <div className="iteam" style={{"--position": "3"}}><img src={pic3} alt="" /></div>
                    <div className="iteam" style={{"--position": "4"}}><img src={pic4} alt="" /></div>
                    <div className="iteam" style={{"--position": "5"}}><img src={pic5} alt="" /></div>
                    <div className="iteam" style={{"--position": "6"}}><img src={pic6} alt="" /></div>
                </div>
            </div>
        </section>
    );
}
 
export default Klientet;