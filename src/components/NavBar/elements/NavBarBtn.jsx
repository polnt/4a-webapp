import React from "react";

import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight as RightArrowIcon } from "react-icons/ai";
import { AiOutlineArrowDown as DownArrowIcon } from "react-icons/ai";

const NavBarBtn = ({ item, toggle, setToggle }) => {
  const handleClick = () => {
    setToggle({ [item.id]: !toggle[item.id] });
  };

  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <button
        type="button"
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        {item.title}
        {toggle[item.id] ? <DownArrowIcon /> : <RightArrowIcon />}
      </button>
      <div
        style={
          toggle[item.id]
            ? {
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: 26,
                // marginTop: "30px",
                backgroundColor: "white",
                border: "1px solid black",
                padding: "0 15px 5px 0",
              }
            : { display: "none" }
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
    </div>
  );
};

export default NavBarBtn;
