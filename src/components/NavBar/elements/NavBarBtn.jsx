import React from "react";

import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight as RightArrowIcon } from "react-icons/ai";
import { AiOutlineArrowDown as DownArrowIcon } from "react-icons/ai";

const NavBarBtn = ({ item, toggle, setToggle }) => {
  const handleClick = () => {
    setToggle({ [item.id]: !toggle[item.id] });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        type="button"
        onClick={handleClick}
        style={{ position: "relative", display: "flex", alignItems: "center" }}
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
                marginTop: "30px",
                backgroundColor: "white",
              }
            : { display: "none" }
        }
      >
        {item.children?.map((subItem) => (
          <NavLink
            to={subItem.path}
            onClick={() => setToggle({ pay: false, hr: false, advice: false })}
          >
            {subItem.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBarBtn;
