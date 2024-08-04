import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import teamKalpanaLogo from './team_kalpana_logo-removebg-preview.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsOpen(false);
  };

  return (
    <div className={styles.navContainer}>
      <img src={teamKalpanaLogo} alt="Team Kalpana Logo" />
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <Link to="/" onClick={() => handleButtonClick('Home')}>
          <button className={activeButton === 'Home' ? styles.active : ''}>Home</button>
        </Link>
        <Link to="/team" onClick={() => handleButtonClick('Team')}>
          <button className={activeButton === 'Team' ? styles.active : ''}>Team</button>
        </Link>
        <Link to="/achievements" onClick={() => handleButtonClick('Achievements')}>
          <button className={activeButton === 'Achievements' ? styles.active : ''}>Achievements</button>
        </Link>
        <Link to="/contact" onClick={() => handleButtonClick('Contact')}>
          <button className={activeButton === 'Contact' ? styles.active : ''}>Contact Us</button>
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Nav;
