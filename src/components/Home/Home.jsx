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

        // minHeight: "100vh",
      }}
    >
      <h1>HOME</h1>
      <div
        className="container_page"
        style={{
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <Solutions />
      </div>
      <div
        className="container_page"
        style={{
          width: "100%",
        }}
      >
        <CTA />
      </div>
    </div>
  );
};

export default Home;
