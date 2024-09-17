import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from "../../assets/logo.png";
import chat from "../../assets/chat.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <Link className="nav-links" to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link className="nav-links" to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link className="nav-links" to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
        <Link className="nav-links" to="clients" smooth={true} duration={500}>
          Clients
        </Link>
      </div>

      <button className="nav-button">
        <Link to="contact" smooth={true} duration={500}>
          <img src={chat} alt="Chat" className="chat-icon" />
          Contact me
        </Link>
      </button>

      {/* CSS Hamburger Icon */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default Navbar;
