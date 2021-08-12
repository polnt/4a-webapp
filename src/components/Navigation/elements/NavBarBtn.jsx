import React, { memo } from "react";

import { NavLink } from "react-router-dom";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const NavBarBtn = memo(({ item, toggle, setToggle, homeStyle }) => {
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
          <Popover id="popover-positioned-bottom">
            <ul className="navigation_button_sub_menu">
              {item.children?.map((subItem) => (
                <li key={`nav_${subItem.title}`} style={{ width: "100%" }}>
                  <NavLink to={subItem.path} onClick={() => setToggle({})}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        fontSize: "1.3rem",
                      }}
                    >
                      {subItem.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </Popover>
        }
      >
        <NavLink
          className={`navigation_button ${
            homeStyle ? "white_font" : "black_font"
          }`}
          to={item.path}
          style={{ textDecoration: "none" }}
        >
          {item.title}
        </NavLink>
      </OverlayTrigger>
    </li>
  );
});

export default NavBarBtn;
