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
        gridColumnStart: 2,
      }}
    >
      <h1>HOME</h1>
      <div style={{ width: "100%" }}>
        <Solutions />
      </div>
      <div style={{ width: "100%" }}>
        <CTA />
      </div>
    </div>
  );
};

export default Home;
