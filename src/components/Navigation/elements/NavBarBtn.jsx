import React, { memo, useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { IoIosArrowForward as RightArrow } from "react-icons/io";
import { IoIosArrowDown as DownArrow } from "react-icons/io";

const NavBarBtn = memo(({ item, toggle, setToggle, homeStyle }) => {
  const [navbarButtonColor, setNavbarButtonColor] = useState("");
  const [arrowIcon, setArrowIcon] = useState(<RightArrow />);

  useEffect(() => {
    homeStyle ? setNavbarButtonColor("white") : setNavbarButtonColor("black");
  }, [homeStyle]);

  const handleClick = () => {
    setToggle({ [item.id]: true });
  };

  return (
    <li
      style={{ fontFamily: "RobotoRegular" }}
      onMouseEnter={handleClick}
      onMouseLeave={() => setToggle({})}
    >
      <OverlayTrigger
        show={!!toggle[item.id]}
        // trigger={["hover", "focus"]}
        key="bottom"
        placement="bottom"
        overlay={
          item.children ? (
            <Popover
              id="popover-positioned-bottom"
              style={{
                maxWidth: "100%",
                backgroundColor: "var(--mainGrey80)",
                padding: "15px 15px 15px 15px",
              }}
            >
              <ul
                className="navigation_button_sub_menu"
                style={{ backgroundColor: "transparent" }}
              >
                {item.children?.map((subItem) => (
                  <li key={`nav_${subItem.title}`}>
                    <NavLink
                      to={subItem.path}
                      onClick={() => setToggle({})}
                      style={{
                        whiteSpace: "nowrap",
                        fontSize: "1.3rem",
                        color: "white",
                      }}
                    >
                      {subItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Popover>
          ) : (
            <div style={{ position: "absolute", visibility: "hidden" }} />
          )
        }
      >
        <NavLink
          className={`navigation_button ${
            homeStyle ? "white_font" : "black_font"
          }`}
          to={item.path}
          style={{ color: navbarButtonColor }}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            onMouseEnter={() => setArrowIcon(<DownArrow />)}
            onMouseLeave={() => setArrowIcon(<RightArrow />)}
          >
            {item.title} {item.children && arrowIcon}
          </div>
        </NavLink>
      </OverlayTrigger>
    </li>
  );
});

export default NavBarBtn;
