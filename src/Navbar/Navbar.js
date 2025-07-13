import './Navbar.css';

function Navbar({ onHamburgerClick }) {
  return (
    <nav className="navbar">
      <button className="hamburger" onClick={onHamburgerClick}>
        ☰
      </button>
      <ul className="nav-links">
        <li><a href="">Ballina</a></li>
        <li><a href="">Sherbimet</a></li>
        <li><a href="">Rreth Nesh</a></li>
        <li><a href="">Kontaktet</a></li>
      </ul>
      <button className="book-btn">Rezervo</button>
    </nav>
  );
}

export default Navbar;
