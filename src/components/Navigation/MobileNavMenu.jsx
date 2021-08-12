import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import { useNav } from "../../hooks";

import { navData } from "./data";

import { IoIosArrowDown as DownArrow } from "react-icons/io";
import { IoIosArrowUp as UpArrow } from "react-icons/io";

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
      style={mobileMenu ? { top: "110px" } : { top: "-2000px" }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {navData.map((item) => (
            <>
              <div
                key={`mobileNav_${item.id}`}
                style={{
                  margin: "20px 20px 0 20px",
                }}
              >
                <button
                  className="mobile_nav_main_link"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   border: "none",
                  //   whiteSpace: "nowrap",
                  //   display: "flex",
                  //   justifyContent: "space-between",
                  //   width: "100%",
                  // }}
                  type="button"
                  onClick={() => setToggle({ [item.id]: !toggle[item.id] })}
                >
                  {item.title}
                  {toggle[item.id] ? (
                    <UpArrow style={{ fontSize: 40 }} />
                  ) : (
                    <DownArrow style={{ fontSize: 40 }} />
                  )}
                </button>
              </div>
              <div
                className="mobile_nav_submenu"
                style={
                  toggle[item.id]
                    ? { visibility: "visible" }
                    : {
                        position: "absolute",
                        visibility: "hidden",
                      }
                }
              >
                {item.children?.map((subItem) => (
                  <NavLink
                    key={`mobileNav_${subItem.title}`}
                    to={subItem.path}
                    style={{ marginLeft: "50px" }}
                    onClick={() => {
                      toggleMobileMenu();
                      setToggle({});
                    }}
                  >
                    {subItem.title}
                  </NavLink>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
