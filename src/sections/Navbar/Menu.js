import React from "react";
import Logo from "../../assets/logo.png";
const Menu = ({ collapsed, hide }) => {
  return (
    !hide && (
      <ul
        className={`navbar__list ${collapsed ? "navbar__list--collapsed" : ""}`}
      >
        {collapsed && (
          <li>
            <img
              src={Logo}
              className="navbar__logo--image navbar__list--collapsed-logo"
            />
          </li>
        )}
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          <a href="#aboutme">About Me</a>
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          <a href="#work">Works</a>
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          <a href="#expertise">Expertise</a>
        </li>
        {/* <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          Journal
        </li> */}
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    )
  );
};

export default Menu;
