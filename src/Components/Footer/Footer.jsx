import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="main-footer-container">
          <div className="line-right"></div>
          <div className="footer-logo">
            <img src="../../image/logo.png" alt="" />
          </div>
          <div className="line-left"></div>
          <div className="perpendicular-line"></div>
        </div>


        <div className="social-contact-section">
          <div className="social-contact-left">
            <h6>
              <i class="fa-solid fa-envelope"></i> Chat with us
            </h6>
         <p>   k.security@icloud.com</p>
          </div>
          <div className="social-contact-middke">
            <div className="social-icon">

            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <p>@kronons_security7</p>
          </div>
          <div className="social-contact-right">
            <i class="fa-solid fa-phone"></i> Phone
            <p>+1(905)321-5540</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
