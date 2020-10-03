import React from "react";

const Menu = ({ collapsed, hide }) => {
  return (
    !hide && (
      <ul
        className={`navbar__list ${collapsed ? "navbar__list--collapsed" : ""}`}
      >
        <li className="navbar__list--item">Home</li>
        <li className="navbar__list--item">About Me</li>
        <li className="navbar__list--item">Works</li>
        <li className="navbar__list--item">Expertise</li>
        <li className="navbar__list--item">Journal</li>
        <li className="navbar__list--item">Contact</li>
      </ul>
    )
  );
};

export default Menu;
