import React, { memo } from "react";

import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

const MenuBtn = memo(({ toggleMobileMenu, homeStyle }) => {
  return (
    <div className="navbar_menu">
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          zIndex: "200",
          // boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
        type="button"
        onClick={() => {
          toggleMobileMenu();
        }}
      >
        <MenuIcon
          className="navbar_icon"
          style={{ color: homeStyle ? "white" : "black" }}
        />
      </button>
    </div>
  );
});

export default MenuBtn;
