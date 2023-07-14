import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { useNavigate } from "react-router-dom";
import "../Pages/Home.css";

const Service = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="slider-section">
        <ImageSlider
          effectDelay={500}
          autoPlayDelay={3000}
          className="slider-container"
        >
          <Slide>
            <img
              alt="img2"
              src="https://images.unsplash.com/photo-1614627264058-f3e35e86d424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            />
          </Slide>
          <Slide>
            <img
              alt="img2"
              src="https://images.unsplash.com/photo-1523294557-3637e1db3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </Slide>
          <Slide>
            <img
              alt="img1"
              src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80"
            />
          </Slide>
        </ImageSlider>

        <div className="home-content" style={{ color: "white", opacity: "10" }}>
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
            Welcome to <strong>Kronos Security</strong>. We are a professional
            security company built on trust, integrity and service excellence.
            Kronos security is an elite security provider specializing in risk
            assessments, crisis management, safety and security concepts for
            large or small events and facilities within the corporate,
            instititional, retail and private sector.
          </p>
          <button className="btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="service-section">
        <h2>Take a Look At Services We rovided</h2>
        <p>We are to protect with courage & to serve with compassion.</p>
        <p>We specialize in security and armed bodyguard service.</p>
        <div className="service-card">
          <div className="service1">
            <i class="fa-solid fa-desktop"></i>
          </div>
          <div className="service2"></div>
          <div className="service3">
            <i class="fa-solid fa-camera-cctv"></i>
            hello froom 3
          </div>
          <div className="service4"></div>
          <div className="service5">
            <i class="fa-regular fa-camera-cctv"></i>
          </div>
          <div className="service6"></div>
          <div className="service7"></div>
          <div className="service8"></div>
        </div>
      </div>
    </>
  );
};

export default Service;
