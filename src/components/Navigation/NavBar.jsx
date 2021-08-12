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

const NavBar = memo(({ mobileMenu, toggleMobileMenu }) => {
  const location = useLocation().pathname;
  const { toggle, setToggle, scrollY } = useNav();

  return (
    <nav
      className="navbar_container"
      style={
        scrollY !== 0 && !mobileMenu
          ? {}
          : {
              backgroundColor: scrollY === 0 ? "transparent" : "white",
              boxShadow:
                scrollY === 0 ? "none" : "0 3px 10px rgb(0 0 0 0 / 0.2)",
              transition: "background-color 1s ease",
            }
      }
    >
      <NavLink
        to="/"
        style={
          location === "/"
            ? { visibility: mobileMenu ? "visible" : "hidden" }
            : { visibility: "visible" }
        }
      >
        <div
          style={
            scrollY !== 0 && !mobileMenu
              ? {
                  minWidth: "70px",
                  maxWidth: "70px",
                  transition: "max-width 0.5s ease",
                }
              : {
                  minWidth: "70px",
                  maxWidth: "130px",
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
            alignItems: "center",
          }}
        >
          <ul className="navbar_links_container">
            {navData.map((item) => (
              <NavBarBtn
                item={item}
                toggle={toggle}
                setToggle={setToggle}
                homeStyle={scrollY === 0}
                key={`nav_${item.id}`}
              />
            ))}
          </ul>
          <ContactBtn homeStyle={scrollY === 0} />
          <MenuBtn
            mobileMenu={mobileMenu}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>
      <MobileNavMenu
        mobileMenu={mobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
});

export default NavBar;
