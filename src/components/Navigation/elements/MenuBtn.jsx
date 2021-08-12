import React, { memo } from "react";

import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

const MenuBtn = memo(({ toggleMobileMenu }) => {
  return (
    <div className="navbar_menu">
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          zIndex: "200",
        }}
        type="button"
        onClick={() => toggleMobileMenu()}
      >
        <MenuIcon className="navbar_icon" />
      </button>
    </div>
  );
});

export default MenuBtn;
