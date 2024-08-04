import React from 'react';
import Achievements from './achievementTemplate';
import achievementsPerYear from './achievmentData';
import styles from './App.module.css';

function AchievementsPage() {
  return (
    <div className={styles.App}>
    <h1 className={styles.title}>OUR ACHIEVEMENTS</h1>
      {achievementsPerYear.map((yearData, yearIndex) => (
        <div key={yearIndex}>
          <h1 className={styles.year}>{yearData.year}</h1>
          <div className={styles.achievementsContainer}>
            {yearData.achievements.map((achievement, index) => (
              <Achievements
                key={index}
                imageLink={achievement.imageLink}
                title={achievement.title}
                description={achievement.description}
                reverseLayout={achievement.reverseLayout}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AchievementsPage;
