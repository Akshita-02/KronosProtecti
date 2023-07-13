import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <img src="../image/logo.png" alt="" />
          </div>
          <div className="head-title">
            <h1>
              {" "}
              <span>KRONOS</span> PROTECTION{" "}
            </h1>
          </div>
        </div>
        <div className="header-bottom" id="myDiv">
        <ul>
          <li>
            <NavLink exact to="/" ClassName="{({ isActive }) =>(isActive ? 'active' : 'inactive')}">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" ClassName="active-link">
              <i className="fas fa-gears"></i> Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" ClassName="active-link">
              <i className="fas fa-users"></i> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" ClassName="active-link">
              <i className="fas fa-address-book"></i> Contact Us
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
