import React, { useRef, useLayoutEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const navbarRef = useRef();
  const [scrollPos, setScrollPos] = useState(undefined);
  useLayoutEffect(() => {
    const onScroll = (e) => {
      setScrollPos(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);
  return (
    <nav
      className="d-flex justify-content-between navbar"
      style={{
        position: scrollPos > 109 ? "fixed" : "absolute",
        backgroundColor: scrollPos > 109 ? "black" : "transparent",
      }}
      ref={navbarRef}
    >
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
