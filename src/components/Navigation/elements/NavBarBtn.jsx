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
        trigger="hover"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <ul
              className="navigation_button_sub_menu"
              style={{ marginBottom: 0 }}
            >
              {item.children?.map((subItem) => (
                <li>
                  <NavLink to={subItem.path} onClick={() => setToggle({})}>
                    <span style={{ whiteSpace: "nowrap" }}>
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
