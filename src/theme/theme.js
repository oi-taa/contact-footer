import React from "react";
import styles from './Theme.module.css';
import insta from './insta.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
function Theme() {
  return (
    <div className={styles.themeContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.rotatingImage}></div>
      </div>
      <div className={styles.titleContainer}>
        <h1>TEAM KALPANA</h1>
      </div>
      <div className={styles.socialContainer}>
        <a href="https://www.instagram.com/teamkalpanansut/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram"/>
        </a>
        <a href="https://m.facebook.com/people/Team-Kalpana/100057646200907/" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter"/>
        </a>
        <a href="https://m.facebook.com/people/Team-Kalpana/100057646200907/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook"/>
        </a>
      </div>
    </div>
  );
}

export default Theme;
