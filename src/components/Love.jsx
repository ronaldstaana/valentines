import React, { useState, useEffect } from 'react';
import '../styles/Love.css'; 
import 'animate.css/animate.min.css';


const Love = () => {
  const [animationType, setAnimationType] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationType((prevType) => (prevType % 3) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="love-animation-container">
      <div className={`love-text animated-${animationType}`}>
        I <span className="heart">❤</span> you wubbie!
      </div>
    </div>
  );
};

export default Love;
