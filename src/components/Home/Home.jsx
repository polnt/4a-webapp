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
      <h1>HOME</h1>
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
