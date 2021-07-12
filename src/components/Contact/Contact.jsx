import React from "react";

import ContactForm from "./elements/Form";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr repeat(2, 6fr) 1fr",
          gridTemplateRow: "2fr",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gridColumnStart: 2,
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
