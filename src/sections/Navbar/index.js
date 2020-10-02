import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between navbar">
      <div className="navbar__logo">
        <img src={Logo} className="navbar__logo--image" alt="ikusum" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__list--item">Home</li>
        <li className="navbar__list--item">About Me</li>
        <li className="navbar__list--item">Works</li>
        <li className="navbar__list--item">Expertise</li>
        <li className="navbar__list--item">Journal</li>
        <li className="navbar__list--item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
