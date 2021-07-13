import React from "react";

import ContactForm from "./elements/Form";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gridColumnStart: 2,
      }}
    >
      <h2>CONTACT</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRow: "1fr",
          width: "100%",
        }}
      >
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
