import React, { memo } from "react";

import { CgProfile as ProfileIcon } from "react-icons/cg";

import { NavLink } from "react-router-dom";

const ClientAreaBtn = memo(() => {
  return (
    <NavLink
      className="navbar_main_link"
      to="/espace-client"
      style={{
        marginRight: "5px",
        marginTop: "5px",
      }}
    >
      <ProfileIcon className="navbar_icon" />
      <span>ESPACE CLIENT</span>
    </NavLink>
  );
});

export default ClientAreaBtn;
