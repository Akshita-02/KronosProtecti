import React, { useRef } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  let sidebar = useRef();

  const addNavbar = () => {
    sidebar.current.classList.add('open');
  };

  const closeNavbar = () => {
    sidebar.current.classList.remove('open');
  };

  return (
    <div className="website-container">
      <div className="sidebar" ref={sidebar}>
        <div className="cross-btn" onClick={closeNavbar}>
          <i className="fas fa-times"></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
          necessitatibus commodi quibusdam ex veritatis eveniet voluptas, libero
          fuga harum aspernatur non? Autem, unde recusandae? Quisquam deserunt
          dolore temporibus assumenda?
        </p>
      </div>
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
          <div className="hamburger-btn" onClick={addNavbar}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="header-bottom" id="myDiv">
          <ul>
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
        </div>
      </div>
    </div>
  );
};

export default Header;