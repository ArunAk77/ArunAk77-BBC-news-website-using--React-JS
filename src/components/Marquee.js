import React from 'react';
import './MarqueeT.css';

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <p><span style={{fontSize:"20px",fontWeight:'bolder'}}> Night of protests in Kolkata after doctor's rape and murder</span>  <span style={{fontSize:"40px",color:"red",fontStyle:"italic"}}>Breaking News </span> {text}</p>
      </div>
    </div>
  );
};

export default Marquee;
