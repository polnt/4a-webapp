import React from "react";

import { NavLink } from "react-router-dom";

import { footerData } from "./data";
import { SiLinkedin as LinkedInLogo } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div
        className="inverted_divider"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "200px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gridRowStart: 3,
          backgroundColor: "var(--mainPurple80)",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--mainPurple)",
          height: "40px",
          fontSize: "20px",
        }}
      >
        <LinkedInLogo />
      </div>
    </footer>
  );
};

export default Footer;
