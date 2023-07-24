import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { useNavigate } from "react-router-dom";
import "../../Pages/Home.css";
import "./Service.css";
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
            concerts and night life."
          </p>
          <p>
            Welcome to <strong>Kronos Security</strong>. We are a professional
            security company built on trust, integrity and service excellence.
            Kronos security is an elite security provider specializing in risk
            assessments, crisis management, safety and security concepts for
            large or small events and facilities within the corporate,
            institutional, retail and private sector.
          </p>
          <button className="btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
      <div
        className="service-section"
        style={{
          background: "rgb(9, 8, 27)",
          // eslint-disable-next-line
          background:
            "linear-gradient(45deg, rgba(9, 8, 27, 1) 59%, rgba(9, 9, 121, 1) 75%, rgba(0, 212, 255, 0.5) 100%)",
        }}
      >
        <div className="ssh-font">
          <h2>
            Take a Look At <span>Services We Provided</span>
          </h2>
          <p>We are here to protect with courage & to serve with compassion.</p>
          <p>We specialize in security and armed bodyguard service.</p>
        </div>
        <div className="service-card">
          <div className="service1">
            <div className="logo">
              <img src="../../../image/s-logo1.png" alt="" />
            </div>
            <h3>Private Investigation Services</h3>
            <p>
             We can help you find legal and efficient solutions to your problems using expert private investigator{" "}
            </p>
          </div>
          <div className="service2">
            <div className="logo">
              <img src="../../../image/s-logo2.png" alt="" />
            </div>
            <h3>Personal Investigation Services</h3>
            <p>
Personal affairs, missing family members and mateimonial investigations. Affordable and legal.            </p>
          </div>
          <div className="service3">
            <div className="logo">
              <img src="../../../image/s-logo3.png" alt="" />
            </div>

            <h3>Armed Security Guard </h3>
            <p>
           We access each client's  security needs and match skilled professional security officers to accommodate their requirementss.
            </p>
          </div>
          <div className="service4">
            <div className="logo">
              <img src="../../../image/s-logo4.png" alt="" />{" "}
            </div>
            <h3>Events security</h3>
            <p>
             Nsg security Services have operated events security services at events and venues from small to large scale.
            </p>
          </div>
          <div className="service5">
            <div className="logo">
              <img src="../../../image/s-logo5.png" alt="" />
            </div>{" "}
            <h3>Commercial Properties </h3>
            <p>
            Kronos Protection provides specialized commercial property security services for corporate buildings, office towers, research and manufacturing facilities and warehouses.
            </p>
          </div>
          <div className="service6">
            <div className="logo">
              <img src="../../../image/s-logo6.png" alt="" />
            </div>
            <h3>Loss Prevention</h3>
            <p>
            Security loss prvention is an essential buiness function that helps companies minimize risk, prevent theft and increase the overall safty of the company.
            </p>
          </div>
          <div className="service7">
            <div className="logo">
              <img src="../../../image/s-logo7.png" alt="" />
            </div>
            <h3>VIP Close Protection</h3>
            <p>
             Our VIP close protection team are made up of highly trained, experienced and professional security personnel. Our close protection officers understand the needs of our clients.
            </p>
          </div>
          <div className="service8">
            <div className="logo">
              <img src="../../../image/s-logo8.png" alt="" />
            </div>
            <h3>Concert Security</h3>
            <p>
             We understand the importance of providing a safe and secure environment for holding your concert or special event.
            </p>
          </div>
        </div>
      </div>
      <div className="events-section">
        <img src="../../../image/events.jpeg" alt="" />
      </div>
    </>
  );
};

export default Service;
