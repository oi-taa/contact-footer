import React from 'react';
import styles from './Achievements.module.css';

const Achievements = ({ imageLink, title, description, reverseLayout = false }) => {
  return (
    <div className={`${styles.achievements} ${reverseLayout ? styles.reverse : ''}`}>
      <img src={imageLink} alt="Achievement" />
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Achievements;
