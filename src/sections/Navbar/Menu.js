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
          Home
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          About Me
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          Works
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          Expertise
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          Journal
        </li>
        <li
          className={
            collapsed
              ? "navbar__list--item item-collapsed"
              : "navbar__list--item"
          }
        >
          Contact
        </li>
      </ul>
    )
  );
};

export default Menu;
