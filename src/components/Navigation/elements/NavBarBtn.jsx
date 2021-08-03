import React, { memo } from "react";

import { NavLink } from "react-router-dom";

import OutsideClickWrapper from "../../_reusable/OutsideClickWrapper";

const NavBarBtn = memo(({ item, toggle, setToggle, homeStyle }) => {
  const handleClick = () => {
    setToggle({ [item.id]: true });
  };

  return (
    <div
      className="navigation_button"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginRight: "25px",
      }}
      onMouseLeave={() => setToggle({})}
    >
      <OutsideClickWrapper toggle={() => toggle[item.id] && setToggle({})}>
        <NavLink to={item.path} style={{ textDecoration: "none" }}>
          <div
            className="navigation_button_text"
            // type="button"
            // onClick={handleClick}
            onMouseEnter={handleClick}
            style={
              homeStyle
                ? {
                    color: "white",
                    transition: "color 0.5s ease",
                  }
                : { color: "black", transition: "color 0.5s ease" }
            }
          >
            {item.title}
          </div>
        </NavLink>
        <div
          style={
            toggle[item.id]
              ? {
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  // top: 26,
                  // marginTop: "30px",
                  backgroundColor: "white",
                  border: "1px solid black",
                  padding: "0 15px 5px 0",
                  visibility: "visible",
                }
              : { visibility: "hidden", position: "absolute" }
          }
        >
          {item.children?.map((subItem) => (
            <NavLink
              style={{ textDecoration: "none", marginLeft: "10px" }}
              to={subItem.path}
              onClick={() => setToggle({})}
            >
              <span style={{ whiteSpace: "nowrap" }}>{subItem.title}</span>
            </NavLink>
          ))}
        </div>
      </OutsideClickWrapper>
    </div>
  );
});

export default NavBarBtn;
