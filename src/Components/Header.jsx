import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="logo">
          <img src="../image/logo.png" alt="" />
        </div>
        <div className="head-title">
          <h1>
            <span>KRONOS</span> PROTECTION
          </h1>
        </div>
      </div>
      <div className="header-bottom" id="myDiv">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active-link">
              <i className="fas fa-gears"></i> Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              <i className="fas fa-users"></i> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              <i className="fas fa-address-book"></i> Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <div className="cross-btn">
              <i className="fas fa-times"></i>
            </div>
          ) : (
            <div className="hamburger-btn">
              <i className="fas fa-bars"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
