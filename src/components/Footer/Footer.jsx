import React from "react";

import { NavLink } from "react-router-dom";

import { footerData } from "./data";
import { SiLinkedin as LinkedInLogo } from "react-icons/si";
import { BlackLinen } from "../../assets/textures";

const Footer = () => {
  return (
    <footer style={{ marginTop: "20px" }}>
      <div
        style={{
          position: "relative",
          backgroundColor: "var(--mainPurple)",
          backgroundImage: `url(${BlackLinen})`,
          width: "100%",
          height: "300px",
        }}
      >
        <div
          className="inverted_divider"
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            width: "100%",
            height: "200px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gridRowStart: 3,
          backgroundColor: "var(--mainPurple)",
          backgroundImage: `url(${BlackLinen})`,
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
