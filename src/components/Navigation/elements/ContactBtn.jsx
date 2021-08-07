import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { SiMinutemailer as ContactIcon } from "react-icons/si";

const ContactBtn = memo(({ homeStyle }) => {
  return (
    <NavLink
      className="navbar_main_link custom_btn"
      to="/contact"
      style={{
        marginRight: "5px",
        textDecoration: "none",
        // color: homeStyle ? "white" : "black",
        backgroundColor: "var(--mainOrange)",
        color: "var(--mainGrey)",
      }}
    >
      <div>
        <ContactIcon className="navbar_icon" />
        <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>CONTACT</span>
      </div>
    </NavLink>
  );
});

export default ContactBtn;
