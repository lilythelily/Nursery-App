import { useState } from "react";
import { NavLink } from "react-router";
import chevron from "/assets/icons/chevron-right.svg";
import close from "/assets/icons/x-02.svg";

const Hamburger = ({ menu, onClose }) => {

  return (
    <div className={menu ? "hamburger-section open" : "hamburger-section"}>
      <ul className="hamburger-menu">
        <img src={close} alt="x" className="close-menu" onClick={onClose} />
        <div className="part">
          <NavLink to="/">
            <div className="menu-item" onClick={onClose}>
              <li>Home</li>
              <img src={chevron} alt="chevron" />
            </div>
          </NavLink>
          <NavLink to="/products">
            <div className="menu-item" onClick={onClose}>
              <li>Products</li>
              <img src={chevron} alt="chevron" />
            </div>
          </NavLink>

          <NavLink to="/about">
            <div className="menu-item" onClick={onClose}>
              <li>About</li>
              <img src={chevron} alt="chevron" />
            </div>
          </NavLink>
        </div>

        <div className="part">
          <div className="menu-item" >
            <li>FAQ</li>
            <img src={chevron} alt="chevron" />
          </div>

          <div className="menu-item" >
            <li>Privacy Policy</li>
            <img src={chevron} alt="chevron" />
          </div>

          <div className="menu-item">
            <li>Contact</li>
            <img src={chevron} alt="chevron" />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Hamburger;
