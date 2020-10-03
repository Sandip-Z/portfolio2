import React, { useLayoutEffect, useState } from "react";
import Menu from "./Menu";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(undefined);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuChecked, setMenuChecked] = useState(window.innerWidth > 1000);

  useLayoutEffect(() => {
    const onScroll = (e) => {
      setScrollPos(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  useLayoutEffect(() => {
    const onSizeChange = (e) => {
      setScreenWidth(window.innerWidth);
      console.log(window.innerWidth);
      if (window.innerWidth > 1000) {
        setMenuChecked(true);
      } else {
        setMenuChecked(false);
      }
    };
    window.addEventListener("resize", onSizeChange);
    return () => window.removeEventListener("resize", onSizeChange);
  }, [screenWidth]);

  return (
    <nav
      className={`${screenWidth > 1000 ? "navbar" : "navbar-collapsed"}`}
      style={{
        position: scrollPos > 100 ? "fixed" : "absolute",
        backgroundColor: scrollPos > 100 ? "#212427" : "transparent",
      }}
    >
      <div className="navbar__logo">
        <img src={Logo} className="navbar__logo--image" alt="ikusum" />
      </div>
      <div className="d-flex">
        <Menu collapsed={screenWidth < 1000} hide={!menuChecked} />
        <label
          htmlFor="menu"
          className={`${
            screenWidth > 1000 ? "d-none" : "d-block"
          } toggle-collapsed-navbar-label`}
          onClick={(e) => setMenuChecked(!menuChecked)}
        >
          Menu
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
