import React, { memo } from "react";

import { NavLink } from "react-router-dom";

// import OutsideClickWrapper from "../../_reusable/OutsideClickWrapper";

const NavBarBtn = memo(({ item, toggle, setToggle, homeStyle }) => {
  const handleClick = () => {
    setToggle({ [item.id]: true });
  };

  return (
    <li
      // className="navigation_button_text"
      // type="button"
      // onClick={handleClick}
      onMouseEnter={handleClick}
      onMouseLeave={() => setToggle({})}
      style={{
        position: "relative",
      }}
    >
      {/* <OutsideClickWrapper toggle={() => toggle[item.id] && setToggle({})}> */}
      <NavLink
        className="navigation_button"
        to={item.path}
        style={
          homeStyle
            ? {
                textDecoration: "none",
                color: "white",
                transition: "color 0.5s ease",
              }
            : {
                textDecoration: "none",
                color: "black",
                transition: "color 0.5s ease",
              }
        }
      >
        {item.title}
      </NavLink>
      <div
        className="navigation_button_sub_menu"
        style={
          toggle[item.id]
            ? {
                visibility: "visible",
              }
            : { visibility: "hidden" }
        }
      >
        {item.children?.map((subItem) => (
          <NavLink
            style={{ textDecoration: "none" }}
            to={subItem.path}
            onClick={() => setToggle({})}
          >
            <span style={{ whiteSpace: "nowrap" }}>{subItem.title}</span>
          </NavLink>
        ))}
      </div>
      {/* </OutsideClickWrapper> */}
    </li>
  );
});

export default NavBarBtn;
