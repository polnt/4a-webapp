import React from "react";

import { NavLink } from "react-router-dom";

import { footerData } from "./data";

const Footer = () => {
  return (
    <div
      style={{
        // position: "fixed",
        // bottom: 0,
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        // paddingTop: "200px",
        // gridColumnStart: 2,
        gridRowStart: 3,
        // width: "100%",
      }}
    >
      {footerData.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          <h4>{item.title}</h4>
          {item.children?.map((subItem) => (
            <NavLink to={subItem.path}>{subItem.title} </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
