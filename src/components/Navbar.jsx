import { Link, NavLink } from "react-router-dom";
import ThemePicker from "./ThemePicker";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-name">Khedni</span>
        <span className="brand-arabic">معك</span>
      </Link>

      <div className="navbar-right">
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/rides">Rides</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <ThemePicker />

        <Link to="/choose-role" className="navbar-cta">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
