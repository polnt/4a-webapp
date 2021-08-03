import React, { memo } from "react";

import { NavLink } from "react-router-dom";

import OutsideClickWrapper from "../../_reusable/OutsideClickWrapper";

import { AiOutlineArrowRight as RightArrowIcon } from "react-icons/ai";
import { AiOutlineArrowDown as DownArrowIcon } from "react-icons/ai";

const NavBarBtn = memo(({ item, toggle, setToggle }) => {
  const handleClick = () => {
    setToggle({ [item.id]: true });
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginLeft: "10px",
      }}
      onMouseLeave={() => setToggle({})}
    >
      <OutsideClickWrapper toggle={() => toggle[item.id] && setToggle({})}>
        <NavLink to={item.path}>
          <div
            // type="button"
            // onClick={handleClick}
            onMouseEnter={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            {item.title}
            {toggle[item.id] ? <DownArrowIcon /> : <RightArrowIcon />}
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
