import React, { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import teamKalpanaLogo from './team_kalpana_logo-removebg-preview.png'; // Adjust the path as necessary

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <img src={teamKalpanaLogo} alt="Team Kalpana Logo" />
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}><button>Home</button></Link>
        <Link to="/team" onClick={() => setIsOpen(false)}><button>Team</button></Link>
        <Link to="/achievements" onClick={() => setIsOpen(false)}><button>Achievements</button></Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}><button>Contact Us</button></Link>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Nav;
