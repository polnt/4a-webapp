import React from "react";

import { NavLink } from "react-router-dom";

const NavigationCard = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      style={{
        border: "1px solid black",
        borderRadius: "0.3em",
        width: "300px",
        height: "300px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </NavLink>
  );
};

export default NavigationCard;
