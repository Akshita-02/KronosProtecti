import React from 'react'
import { Slider0 } from './slider';
import { useNavigate } from "react-router-dom";

const Cta = () => {
       const navigate = useNavigate();

       const handleContactClick = () => {
         navigate("/contact");
       };
  return (
    <div className="home-container-section">
      <Slider0 />
      <div className="home-content">
        <h1>
          <span> KRONOS </span> PROTECTION
        </h1>
        <hr />
        <p>
            "Security is essential in our ever changing world as it promotes a
            safe and secure environment for those who enjoy festivals, events,
            concerts and night life"
          </p>
          <p>
            Welcome to <strong>Kronos Security</strong> . We are a professional security
            company built on trust, integrity and service excellence. Kronos
            security is an elite security provider specializing in risk
            assessments, crisis management, safety and security concepts for
            large or small events and facilities within the corporate,
            instititional, retail and private sector.
          </p>
        <button className="btn" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Cta