import React from "react";

import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

const MenuBtn = () => {
  return (
    <div className="navbar_menu">
      <button
        style={{ border: "none", backgroundColor: "transparent" }}
        type="button"
      >
        <MenuIcon className="navbar_icon" />
      </button>
    </div>
  );
};

export default MenuBtn;
