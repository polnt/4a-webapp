import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";

import { useNav } from "../../hooks";

import { navData } from "./data";

const MobileNavMenu = () => {
  const { toggle, setToggle } = useNav();
  const mobileMenu = false;

  return (
    <div
      className="navbar_menu_links"
      style={
        mobileMenu
          ? {
              display: "block",
              position: "absolute",
              // width: "100%",
              top: 0,
              bottom: -700,
              left: 0,
              right: 0,
              backgroundColor: "black",
              transition: "bottom 2s ease",
              zIndex: 1000,
            }
          : {
              position: "absolute",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }
      }
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navData.map((item) => (
          <div>
            <button
              type="button"
              onClick={() => setToggle({ [item.id]: !toggle[item.id] })}
            >
              {item.title}
            </button>
            <div
              style={
                toggle[item.id]
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      // top: 26,
                      // marginTop: "30px",
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "0 15px 5px 0",
                    }
                  : { display: "none" }
              }
            >
              {item.children?.map((subItem) => (
                <NavLink to={subItem.path}>{subItem.title}</NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavMenu;
