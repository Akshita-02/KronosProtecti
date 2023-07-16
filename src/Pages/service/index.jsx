import React from "react";
import Cta from "../../Components/Cta";
import "./Service.css";
const Service = () => {
  return (
    <>
      <Cta />
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
              <p>We are to protect with courage & to serve with compassion.</p>
              <p>We specialize in security and armed bodyguard service.</p>
            </div>
            <div className="service-card">
              <div className="service1">
                <div className="logo">
                  <img src="../../../image/s-logo1.png" alt="" />
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service2">
                <div className="logo">
                  <img src="../../../image/s-logo2.png" alt="" />
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service3">
                <div className="logo">
                  <img src="../../../image/s-logo3.png" alt="" />
                </div>

                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service4">
                <div className="logo">
                  <img src="../../../image/s-logo4.png" alt="" />{" "}
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service5">
                <div className="logo">
                  <img src="../../../image/s-logo5.png" alt="" />
                </div>{" "}
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service6">
                <div className="logo">
                  <img src="../../../image/s-logo6.png" alt="" />
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service7">
                <div className="logo">
                  <img src="../../../image/s-logo7.png" alt="" />
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
              <div className="service8">
                <div className="logo">
                  <img src="../../../image/s-logo8.png" alt="" />
                </div>
                <h3>Private Investigation Service</h3>
                <p>
                  We can help you find legal and efficient solutions to your
                  problems using expert private investigator{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="events-section">
            <img src="../../../image/events.jpeg" alt="" />
          </div>{" "}
      <div className="events-section">
        <img src="../../../image/events.jpeg" alt="" />
      </div>
    </>
  );
};

export default Service;
