import React from "react";

import { NavLink } from "react-router-dom";

import { useNav } from "../../hooks";

import { navData } from "./data";

const MobileNavMenu = ({ mobileMenu, setMobileMenu }) => {
  const { toggle, setToggle } = useNav();

  return (
    <div
      className={
        mobileMenu
          ? "mobile_nav_menu_container_show"
          : "mobile_nav_menu_container_hidden"
      }
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {navData.map((item) => (
            <div
              className={
                mobileMenu
                  ? "mobile_nav_menu_links_show"
                  : "mobile_nav_menu_links_hidden"
              }
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  whiteSpace: "nowrap",
                }}
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
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "0 15px 5px 0",
                      }
                    : { display: "none" }
                }
              >
                {item.children?.map((subItem) => (
                  <NavLink
                    to={subItem.path}
                    onClick={() => {
                      setMobileMenu(!mobileMenu);
                      setToggle({});
                    }}
                  >
                    {subItem.title}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
