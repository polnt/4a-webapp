import React from "react";

import Solutions from "./elements/Solutions";
import CTA from "./elements/CTA";

import { GrValidate as ValidIcon } from "react-icons/gr";

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
          paddingTop: "20px",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <section
          className="content_page"
          style={{
            transition: "1s all ease",
            visibility: "visible",
            width: "100%",
            // display: "flex",
            // flexDirection: "column",
            // // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ValidIcon style={{ marginRight: "10px" }} />
            Des solutions adaptées à vos besoins
          </h2>

          <div
            className="content_page"
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              minHeight: "90vh",
              width: "100%",
            }}
          >
            <CTA />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
