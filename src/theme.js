import React, { useEffect } from "react";
import './theme.css';

function Theme() {
  const handleScroll = () => {
    console.log("Hello");
    // Implement rotation logic here
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="theme-container">
      <div className="image-container">
        <div className="rotating-image"></div>
      </div>
      <div className="title-container">
        <h1>TEAM KALPANA</h1>
      </div>
    </div>
  );
}

export default Theme;
