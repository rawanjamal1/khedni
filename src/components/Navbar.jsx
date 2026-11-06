import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-name">Khedni</span>
        <span className="brand-arabic">معك</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">Rides</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Link to="/choose-role" className="navbar-cta">
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;
