import React from "react";

import { NavLink } from "react-router-dom";

import { footerData } from "./data";
import { SiLinkedin as LinkedInLogo } from "react-icons/si";
import { BlackLinen } from "../../assets/textures";

import "../../css/Footer/Footer.css";

const Footer = () => {
  return (
    <footer style={{ marginTop: "20px" }}>
      <div
        className="footer_background"
        style={{
          backgroundImage: `url(${BlackLinen})`,
        }}
      >
        <div className="inverted_divider" />
      </div>

      <div
        className="footer_main_container"
        style={{
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
      <div className="footer_socials_container">
        <LinkedInLogo />
      </div>
    </footer>
  );
};

export default Footer;
