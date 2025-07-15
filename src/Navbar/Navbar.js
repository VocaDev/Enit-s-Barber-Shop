import { useState } from "react";
import "./Navbar.css";
import logo from "../Fotot/logo-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="book-btn">Book Now</button></li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
