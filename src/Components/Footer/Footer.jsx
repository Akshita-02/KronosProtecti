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
            <a href="mailto:k.security@icloud.com">
              <h6>
                <i className="fa-solid fa-envelope"></i> Chat with us
              </h6>
            </a>
            <p>k.security@icloud.com</p>
          </div>
          <div className="social-contact-middke">
            <div className="social-icon">
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <p className="s-p">@kronons_security7</p>
          </div>
          <div className="social-contact-right">
            <i class="fa-solid fa-phone"></i> Phone
            <p>
              <a href="tel:+19053215540">+1(905)321-5540</a>
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>© Copyright 2023. All Rights Reserved. KRONOS PROTECTION</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
