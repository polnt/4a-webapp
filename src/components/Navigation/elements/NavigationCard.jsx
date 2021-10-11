import React from "react";

import { NavLink } from "react-router-dom";

import PayAudit2 from "../../../assets/img/navPage/PayAudit.jpg";

const NavigationCard = ({ path, title, image }) => {
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
        backgroundImage: `url(${image})`,
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
