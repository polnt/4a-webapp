import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { useNav } from "../../hooks";

import NavBarBtn from "./elements/NavBarBtn";
import ProfileBtn from "./elements/ProfileBtn";
import ContactBtn from "./elements/ContactBtn";
import MenuBtn from "./elements/MenuBtn";
import MobileNavMenu from "./MobileNavMenu";

import { navData } from "./data";

import Logo4A from "../../assets/Logo4A_150x150.png";
import LittleLogo4A from "../../assets/Logo4A_70x70.png";

import "../../css/NavBar/NavBar.css";

const NavBar = () => {
  const { toggle, setToggle, scrollY, mobileMenu, setMobileMenu } = useNav();

  return (
    <div className="navbar_container">
      <NavLink to="/">
        <img
          // src={LittleLogo4A}
          src={scrollY === 0 ? Logo4A : LittleLogo4A}
          alt="logo entreprise"
        />
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
          <ProfileBtn />
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
};

export default NavBar;
