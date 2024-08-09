import React from "react";
import styles from './SponsorsSection.module.css';
import { Youtube, Vimeo, Twitch, Asana, IGTV, Flickr, Netflix, Coub } from './icons-sponsors'; 

export const OurSponsors = () => {
  return (
    <div className={styles.sponsorsContainer}>
      <h1 className={styles.sponsorsHeading}>OUR SPONSORS</h1>
      <div className={styles.sponsorsLogos}>
        <Youtube/>
        <Vimeo/>
        <Twitch/>
        <Asana/>
        <IGTV/>
        <Flickr/>
        <Netflix/>
        <Coub/>
      </div>
    </div>
  );
};
export default OurSponsors;