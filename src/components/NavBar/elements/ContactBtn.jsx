import React from "react";
import { NavLink } from "react-router-dom";

import { SiMinutemailer as ContactIcon } from "react-icons/si";

const ContactBtn = () => {
  return (
    <div
      style={{
        marginRight: "10px",
        marginTop: "7px",
      }}
    >
      <NavLink className="navbar_main_link" to="/contact">
        <ContactIcon className="navbar_icon" />
        <span>Contact</span>
      </NavLink>
    </div>
  );
};

export default ContactBtn;
