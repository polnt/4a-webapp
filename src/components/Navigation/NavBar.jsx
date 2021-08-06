import React, { memo } from "react";

import { NavLink, useLocation } from "react-router-dom";

import { useNav } from "../../hooks";

import NavBarBtn from "./elements/NavBarBtn";
import ContactBtn from "./elements/ContactBtn";
import MenuBtn from "./elements/MenuBtn";
import MobileNavMenu from "./MobileNavMenu";

import { navData } from "./data";

import { LogoNoPolice } from "../../assets/svg";

import "../../css/NavBar/NavBar.css";

const NavBar = memo(() => {
  const location = useLocation().pathname;
  const { toggle, setToggle, scrollY, mobileMenu, setMobileMenu } = useNav();

  return (
    <nav
      className="navbar_container"
      style={
        scrollY === 0
          ? {
              backgroundColor: "transparent",
              boxShadow: "none",
              transition: "background-color 1s ease",
            }
          : {}
      }
    >
      <NavLink
        to="/"
        style={
          location === "/"
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <div
          style={
            scrollY === 0
              ? {
                  minWidth: "70px",
                  maxWidth: "130px",
                  transition: "max-width 0.5s ease",
                }
              : {
                  minWidth: "70px",
                  maxWidth: "70px",
                  transition: "max-width 0.5s ease",
                }
          }
        >
          <LogoNoPolice />
        </div>
      </NavLink>
      <div className="navbar_main_container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ul className="navbar_links_container" style={{ marginBottom: 0 }}>
            {navData.map((item) => (
              <NavBarBtn
                item={item}
                toggle={toggle}
                setToggle={setToggle}
                homeStyle={scrollY === 0}
              />
            ))}
          </ul>
          <ContactBtn homeStyle={scrollY === 0} />
          <MenuBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div>
      </div>
      <MobileNavMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </nav>
  );
});

export default NavBar;
