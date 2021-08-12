import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import { useNav } from "../../hooks";

import { navData } from "./data";

const MobileNavMenu = ({ mobileMenu, toggleMobileMenu }) => {
  const { toggle, setToggle } = useNav();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.getElementById("target"));
  }, []);

  useEffect(() => {
    mobileMenu ? disableBodyScroll(target) : enableBodyScroll(target);

    return () => clearAllBodyScrollLocks();
  }, [mobileMenu]);

  return (
    <div
      className="mobile_nav_menu_container"
      id="target"
      style={mobileMenu ? { top: "100px" } : { top: "-2000px" }}
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
              key={`mobileNav_${item.id}`}
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
                    key={`mobileNav_${subItem.title}`}
                    to={subItem.path}
                    onClick={() => {
                      toggleMobileMenu();
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
