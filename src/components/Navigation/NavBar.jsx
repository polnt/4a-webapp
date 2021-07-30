import React, { memo } from "react";

import { NavLink } from "react-router-dom";

import { useNav } from "../../hooks";

import NavBarBtn from "./elements/NavBarBtn";
import ContactBtn from "./elements/ContactBtn";
import MenuBtn from "./elements/MenuBtn";
import MobileNavMenu from "./MobileNavMenu";

import { navData } from "./data";

import { LogoNoPolice, LogoWithPolice } from "../../assets/svg";

import "../../css/NavBar/NavBar.css";

const NavBar = memo(() => {
  const { toggle, setToggle, scrollY, mobileMenu, setMobileMenu } = useNav();

  return (
    <div className="navbar_container">
      <NavLink to="/">
        <div
          className="navbar_logo_container"
          style={
            scrollY < 40
              ? { maxWidth: "150px", transition: "max-width 0.5s ease" }
              : { maxWidth: "70px", transition: "max-width 0.5s ease" }
          }
        >
          <LogoWithPolice />
        </div>
      </NavLink>
      <div className="navbar_buttons_container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          <ContactBtn />
          <MenuBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div>
        <div className="navbar_links_container">
          {navData.map((item) => (
            <NavBarBtn item={item} toggle={toggle} setToggle={setToggle} />
          ))}
        </div>
      </div>
      <MobileNavMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  );
});

export default NavBar;
