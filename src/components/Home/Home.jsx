import React from "react";

import Solutions from "./elements/Solutions";
import CTA from "./elements/CTA";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "800px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            gridColumnStart: "1",
            gridColumnEnd: "4",
          }}
        >
          <h1
            style={{
              color: "#f9f9f9",
              visibility: "hidden",
              position: "absolute",
            }}
          >
            Bienvenue sur le site web de la société 4A
          </h1>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Solutions />
          </section>
        </div>
        <div className="divider" style={{ zIndex: 2 }} />
      </div>
      <div
        className="container_page"
        style={{
          width: "100%",
        }}
      >
        <section
          className="content_page"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "1s all ease",
            visibility: "visible",
          }}
        >
          <h2>Des solutions adaptées à vos besoins</h2>
          <CTA />
        </section>
      </div>
    </div>
  );
};

export default Home;
