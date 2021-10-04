import React, { memo, useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const NavBarBtn = memo(({ item, toggle, setToggle, homeStyle }) => {
  const [navbarButtonColor, setNavbarButtonColor] = useState("");

  useEffect(() => {
    homeStyle ? setNavbarButtonColor("white") : setNavbarButtonColor("black");
  }, [homeStyle]);

  const handleClick = () => {
    setToggle({ [item.id]: true });
  };

  return (
    <li onMouseEnter={handleClick} onMouseLeave={() => setToggle({})}>
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
                        fontWeight: "bold",
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
          {item.title}
        </NavLink>
      </OverlayTrigger>
    </li>
  );
});

export default NavBarBtn;
