import React from "react";
import './sponsors.css';
import { Youtube, Vimeo, Twitch, Asana, IGTV, Flickr, Netflix, Coub } from './icons'; 

export const OurSponsors = ({ className }) => {
  return (
    <div className="sponsors-container">
      <h1>OUR SPONSORS</h1>
      <div className="logos">
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