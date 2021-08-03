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
        className="container_page"
        style={{
          backgroundColor: "var(--mainOrange)",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          className="content_page"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ visibility: "hidden" }}>
            BIENVENUE SUR LE SITE WEB DE 4A
          </h1>
          <div style={{ maxWidth: "500px" }}>
            <LogoWithPolice />
          </div>
        </div>
      </div>
      <div
        className="container_page divider"
        style={{
          backgroundColor: "var(--mainOrange)",
          width: "100%",
          height: "200px",
        }}
      />

      <div
        className="container_page"
        style={{
          width: "100%",
        }}
      >
        <div
          className="content_page"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Solutions />
        </div>
      </div>
      <div
        className="container_page"
        style={{
          width: "100%",
        }}
      >
        <div
          className="content_page"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
