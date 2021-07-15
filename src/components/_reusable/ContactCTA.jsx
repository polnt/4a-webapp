import React from "react";

import { NavLink } from "react-router-dom";

const ContactCTA = () => {
  return (
    <NavLink to="/contact">
      <button type="button">Demander un devis</button>
    </NavLink>
  );
};

export default ContactCTA;
