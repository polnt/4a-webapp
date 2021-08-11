import React from "react";

import Solutions from "./elements/Solutions";
import CTA from "./elements/CTA";

import { LogoWithPolice } from "../../assets/svg";

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
        // className="container_page"
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "700px",
          position: "relative",
        }}
      >
        <div
          // className="content_page"
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
          {/* <div style={{ maxWidth: "500px" }}>
            <LogoWithPolice policeColor="#ffffff" />
          </div> */}
          <section
            // className="content_page"
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
        <div className="divider" style={{ height: "100px" }} />
      </div>
      <div
        className="container_page"
        style={{
          width: "100%",
        }}
      >
        {/* <section
          className="content_page"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Solutions />
        </section> */}
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
          <CTA />
        </section>
      </div>
    </div>
  );
};

export default Home;
