import React from "react";

import { NavLink } from "react-router-dom";

import { footerData } from "./data";
import { SiLinkedin as LinkedInLogo } from "react-icons/si";
import { BlackLinen } from "../../assets/textures";
import mainBackground from "../../assets/img/BG_homepage.png";

import "../../css/Footer/Footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${BlackLinen}), url(${mainBackground})`,
        backgroundColor: "var(--mainPurple80)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "400px",
        position: "relative",
      }}
    >
      <div className="inverted_divider" />
      <div
        className="footer_main_container"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          width: "100%",
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
            <ul>
              {item.children?.map((subItem) => (
                <li>
                  <NavLink to={subItem.path}>{subItem.title} </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="footer_socials_container"
        style={{ backgroundImage: `url(${BlackLinen})` }}
      >
        <LinkedInLogo />
      </div>
    </footer>
  );
};

export default Footer;
