import React from "react";

import { NavLink } from "react-router-dom";

import { SiLinkedin as LinkedInLogo } from "react-icons/si";
import { BlackLinen } from "../../assets/textures";

import ContactCTA from "../_reusable/ContactCTA";

import "../../css/Footer/Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer_container"
      style={{
        // backgroundImage: `url(${BlackLinen})`,
      }}
    >
      <div className="inverted_divider" />
      <div className="footer_main_container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <section
            className="footer_list"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h4 style={{ fontSize: "2em", textAlign: "center" }}>
              Nos coordonnées
            </h4>
            <span style={{ color: "var(--mainCream)", fontSize: "1.5em" }}>
              accueil-4A@société4A.com
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <ContactCTA />
            </div>
          </section>
        </div>
        <section className="footer_law_container">
          <h4 style={{ position: "absolute", visibility: "hidden" }}>
            Informations
          </h4>
          <NavLink
            to="/"
            style={{
              color: "var(--mainCream)",
              fontSize: "1.5em",
            }}
          >
            Mentions légales
          </NavLink>
          <NavLink
            to="/"
            style={{
              color: "var(--mainCream)",
              fontSize: "1.5em",
            }}
          >
            Cookies - Conditions d'utilisation
          </NavLink>
        </section>
      </div>
      <div className="footer_socials_container">
        <LinkedInLogo />
      </div>
    </footer>
  );
};

export default Footer;
