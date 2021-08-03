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
        className="container_page"
        style={{
          backgroundColor: "var(--mainOrange)",
          width: "100%",
          height: "300px",
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
          <h1>HOME</h1>
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
