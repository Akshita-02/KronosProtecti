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
Personal affairs, missing family members, and matrimonial investigations. Affordable and legal.            </p>
          </div>
          <div className="service3">
            <div className="logo">
              <img src="../../../image/s-logo3.png" alt="" />
            </div>

            <h3>Armed Security Guard </h3>
            <p>
           We access each client's  security needs and match skilled professional security officers to accommodate their requirements.
            </p>
          </div>
          <div className="service4">
            <div className="logo">
              <img src="../../../image/s-logo4.png" alt="" />{" "}
            </div>
            <h3>Events security</h3>
            <p>
             Nsg Security Services have operated events security services at events and venues from small to large scale.
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
            Security loss prevention is an essential business function that helps companies minimize risk, prevent theft and increase the overall safety of the company.
            </p>
          </div>
          <div className="service7">
            <div className="logo">
              <img src="../../../image/s-logo7.png" alt="" />
            </div>
            <h3>VIP Close Protection</h3>
            <p>
             Our VIP close protection team is made up of highly trained, experienced, and professional security personnel. Our close protection officers understand the needs of our clients.
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
      </div>{" "}
      <div className="event-details">
        <h2>
          <span>
            {" "}
            <strong>ONTARIO </strong> Events secured by{" "}
          </span>
        </h2>
        <h1 className="events-h">KRONOS SECURITY</h1>
      </div>
      <div className="event-card">
        <div className="cd-1">
          <li>Musicians</li>
          <li>Bands</li>
        </div>
        <div className="cd-2">
          <li>Fairs</li>
          <li>Concerts</li>
        </div>
        <div className="cd-3">
          <li>Fests</li>
          <li> Carnivals </li>
        </div>
      </div>
      <div className="risk-sec">
        <h3>
          Prepared For Anything: <span> Risk Assessment</span>
        </h3>
        <h3>
          <span> And Emergency Prevention </span>
        </h3>
        <div className="risk-detail">
          <div className="detail-l">
            <p>
              {" "}
              Risk assessment and emergency prevention are indispensable
              practices for ensuring safety and minimizing the impact of
              emergencies. By identifying and analyzing potential risks and
              hazards, individuals and organizations can implement preventive
              measures that safeguard lives, assets, and the environment.
            </p>
            <p>
              We focus on taking proactive measures to reduce the likelihood
              of emergencies and minimize their potential impact. it involves
              implementing preventive strategies and measures based on the
              outcomes of risk assessments.
            </p>
          </div>
          <div className="detail-r">
            <img src="../../../image/event-img.png" alt="" />
          </div>
        </div>
      </div>
      <div className="k-protection">
        <h1 className="hk-1"> "Your world is more secure with us" </h1>
        <div className="hk">
          <p>Close security by Kronos Protection</p>
        </div>
        <div className="img w-full ">
          <img src="../../../image/close-protect.png" alt="" />
        </div>
        {/* //protection card starts here  */}
        <div className="protection-card">
          <div className="p-c-1">
            <h1>Artist</h1>
            <li>BodyGuards</li>
            <li>Close Protection</li>
            
          </div>
          <div className="p-c-2">
            <h1>bands</h1>
            <li>Musicians</li>
            <li>Artists</li>
            
          </div>
          <div className="p-c-3">
            <h1>movie/tv</h1>
            <li>Actors</li>
            <li>Actresses</li>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
