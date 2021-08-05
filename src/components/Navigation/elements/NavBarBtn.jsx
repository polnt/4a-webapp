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
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={subItem.path}
                    onClick={() => setToggle({})}
                  >
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
          className="navigation_button"
          to={item.path}
          style={{
            textDecoration: "none",
            color: homeStyle ? "white" : "inherit",
            transition: "color 0.5s ease",
          }}
        >
          {item.title}
        </NavLink>
      </OverlayTrigger>
    </li>
  );
});

export default NavBarBtn;
