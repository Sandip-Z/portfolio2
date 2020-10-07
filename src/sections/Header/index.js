import React from "react";
import "./header.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__content">
        <h1>Namaste I'm Sandip Satyal</h1>
        <h5 className="text-center">Kickass REACT and NODE Rockstar</h5>
        <h5 className="text-center">from the top of himalayas.</h5>
        <div className="d-flex mt-3">
          <a href="#aboutme" className="button">
            About me
          </a>
        </div>
      </div>
      <div className="header__social-media">
        <ul className="header__social-media--list social-media-list">
          <li className="header__social-media--list--item">
            <AiOutlineTwitter className="icon" />
          </li>
          <li className="header__social-media--list--item">
            <AiFillInstagram className="icon" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
