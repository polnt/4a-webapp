import React, { memo } from "react";

import { NavLink, useLocation } from "react-router-dom";

import { useNav } from "../../hooks";

import NavBarBtn from "./elements/NavBarBtn";
import ContactBtn from "./elements/ContactBtn";
import MenuBtn from "./elements/MenuBtn";
import MobileNavMenu from "./MobileNavMenu";

import { navData } from "./data";

import { LogoNoPolice, LogoWithPolice } from "../../assets/svg";

import { BlackLinen } from "../../assets/textures";

import "../../css/NavBar/NavBar.css";

const NavBar = memo(() => {
  const location = useLocation().pathname;
  const { toggle, setToggle, scrollY, mobileMenu, setMobileMenu } = useNav();

  return (
    <div
      className="navbar_container"
      style={
        scrollY === 0 && location === "/"
          ? {
              backgroundColor: "var(--mainGrey)",
              backgroundImage: `url(${BlackLinen})`,
              boxShadow: "none",
              transition: "background-color 1s ease",
            }
          : {}
      }
    >
      {/* {location === "/" && scrollY === 0 ? (
        <div style={{ minHeight: "130px" }} />
      ) : ( */}
      <NavLink
        to="/"
        style={
          location === "/" && scrollY === 0
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <div
          // className="navbar_logo_container"
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
          {scrollY < 1 ? <LogoWithPolice /> : <LogoNoPolice />}
        </div>
      </NavLink>
      {/* )} */}
      <div className="navbar_main_container">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <ContactBtn />
          <MenuBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div> */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="navbar_links_container">
            {navData.map((item) => (
              <NavBarBtn
                item={item}
                toggle={toggle}
                setToggle={setToggle}
                homeStyle={scrollY === 0 && location === "/"}
              />
            ))}
          </div>
          <ContactBtn />
          <MenuBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div>
      </div>
      <MobileNavMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  );
});

export default NavBar;
