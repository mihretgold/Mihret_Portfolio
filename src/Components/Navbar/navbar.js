import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "clients", label: "Experience" },
    { to: "portfolio", label: "Projects" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-content">
        <Link to="home" smooth={true} duration={500} className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className={`nav-container ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className="nav-links"
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="contact" smooth={true} duration={500} className="nav-button-link">
          <button className="nav-button">
            <svg className="nav-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Let's Talk
          </button>
        </Link>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
