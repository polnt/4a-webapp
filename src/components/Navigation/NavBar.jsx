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
    <div
      className="navbar_container"
      style={
        scrollY === 0
          ? {
              backgroundColor: "var(--mainOrange)",
              boxShadow: "none",
              transition: "background-color 1s ease",
            }
          : {}
      }
    >
      <NavLink to="/">
        <div
          // className="navbar_logo_container"
          style={
            scrollY === 0
              ? {
                  maxWidth: "130px",
                  transition: "max-width 0.5s ease",
                }
              : { maxWidth: "70px", transition: "max-width 0.5s ease" }
          }
        >
          {scrollY < 40 ? <LogoWithPolice /> : <LogoNoPolice />}
        </div>
      </NavLink>
      <div className="navbar_main_container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
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
