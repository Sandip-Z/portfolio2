import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../../assets/logo.png";
import Menu from "../Navbar/Menu";
const Footer = () => {
  return (
    <footer className="d-flex justify-content-around">
      <div className="align-self-center">
        <figure className="m-auto">
          <img src={Logo} className="navbar__logo--image" alt="ikhan" />
        </figure>
      </div>
      <div className="align-self-center">
        <ul className="navbar__list align-self-center">
          <Menu />
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
