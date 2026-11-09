import { Link, NavLink } from "react-router-dom";
import ThemePicker from "./ThemePicker";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Rides", path: "/rides", icon: "car" },
  { name: "About", path: "/about", icon: "about" },
  { name: "Contact", path: "/contact", icon: "contact" },
];

function NavIcon({ icon }) {
  if (icon === "home") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 10L12 3L21 10V20H15V14H9V20H3V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "car") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 11L6 6H18L20 11V19H4V11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20M7 16H8M16 16H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 19V21M18 19V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "about") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 11V17M12 7H12.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-name">Khedni</span>
        <span className="brand-arabic">معك</span>
      </Link>

      <div className="navbar-right">
        <div className="nav-icon-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-icon-item ${isActive ? "active" : ""}`
              }
              aria-label={item.name}
            >
              <NavIcon icon={item.icon} />

              <span className="nav-icon-tooltip">{item.name}</span>
            </NavLink>
          ))}
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
