import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/navbar.less";
import logo from "../assets/images/logo/fraudsnitchlogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="left-nav">
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div
        className="hamburger-menu"
        onClick={handleMenuToggle}
      >
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      <div className={`right-nav ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/educational"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Education
        </NavLink>
        <NavLink
          to="/newsroom"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Newsroom
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Report
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
