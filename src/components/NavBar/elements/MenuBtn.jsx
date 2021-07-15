import React, { useState } from "react";

import { useNav } from "../../../hooks";

import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

const MenuBtn = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar_menu">
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          zIndex: "200",
        }}
        type="button"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <MenuIcon
          className="navbar_icon"
          style={mobileMenu ? { color: "white" } : { color: "black" }}
        />
      </button>
    </div>
  );
};

export default MenuBtn;
