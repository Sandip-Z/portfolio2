import React from "react";
import "./header.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1>Namaste I'm Ishan Subedi</h1>
        <h5 className="text-center">Kickass Vue/Vuetify and Nuxt Rockstar</h5>
        <h5 className="text-center">from the roots of himalayas.</h5>
        <button className="header__button">About me</button>
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
