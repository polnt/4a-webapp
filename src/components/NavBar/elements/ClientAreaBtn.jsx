import React, { memo } from "react";

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
      <span>Espace client</span>
    </NavLink>
  );
});

export default ClientAreaBtn;
