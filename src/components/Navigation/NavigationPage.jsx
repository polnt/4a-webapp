import React from "react";

import { NavLink } from "react-router-dom";

import { navData } from "./data";

const NavigationPage = ({ index }) => {
  return (
    <div className="container_page">
      <div
        className="content_page"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {navData[index]?.children.map((item) => (
          <NavLink to={item.path}>{item.title}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationPage;
