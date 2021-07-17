import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { SiMinutemailer as ContactIcon } from "react-icons/si";

const ContactBtn = memo(() => {
  return (
    <NavLink
      className="navbar_main_link"
      to="/contact"
      style={{
        marginRight: "5px",
        marginTop: "5px",
      }}
    >
      <ContactIcon className="navbar_icon" />
      <span>Contact</span>
    </NavLink>
  );
});

export default ContactBtn;
