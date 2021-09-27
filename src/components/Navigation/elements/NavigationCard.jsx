import React from "react";

import { NavLink } from "react-router-dom";

const NavigationCard = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      style={{
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        borderRadius: "0.3em",
        width: "300px",
        height: "300px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--mainPurple)",
        // textDecoration: "none",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {title}
    </NavLink>
  );
};

export default NavigationCard;
