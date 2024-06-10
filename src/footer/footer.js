import React from "react";
import './footer.css';
import facebook from './icons8-facebook-48.png';

export const Footer = () => {
  return (
    <div class='footer-wtext'>
      <p>Connect with us on</p>
      <div className="footer">
        <div className="footer-icons">
          <a href="https://www.facebook.com/people/Team-Kalpana/100057646200907/?_rdr" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook"/>
          </a>
          <a href="https://www.instagram.com/teamkalpanansut/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/team-kalpana/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
          </a>
        </div>
    </div>
  </div>
  );
};

