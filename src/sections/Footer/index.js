import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="d-flex justify-content-around">
      <div className="align-self-center">
        <figure className="m-auto">
          <img src={Logo} className="navbar__logo--image" alt="ikusum" />
        </figure>
      </div>
      <div className="align-self-center">
        <ul className="navbar__list align-self-center">
          <li className="navbar__list--item">Home</li>
          <li className="navbar__list--item">About Me</li>
          <li className="navbar__list--item">Works</li>
          <li className="navbar__list--item">Expertise</li>
          <li className="navbar__list--item">Journal</li>
          <li className="navbar__list--item">Contact</li>
        </ul>
      </div>
      <div className="align-self-center">
        <ul className="m-auto footer__social">
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillTwitterCircle />
          </li>
          <li>
            <AiFillInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
