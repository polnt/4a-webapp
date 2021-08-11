import React from "react";

import { NavLink } from "react-router-dom";

const ContactCTA = () => {
  return (
    <NavLink to="/contact">
      <button
        className="custom_btn"
        style={{ backgroundColor: "var(--mainOrange)" }}
        type="button"
      >
        Demander un devis
      </button>
    </NavLink>
  );
};

export default ContactCTA;
