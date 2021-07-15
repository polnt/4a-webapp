import React from "react";

import ContactForm from "./elements/Form";

import "../../css/Contact/Contact.css";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>CONTACT</h2>
      <div className="contact_content_container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Coordonnées</h3>
          <p>???</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
