import React from "react";

import YouAre from "./elements/YouAre";
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
        <CTA />
      </div>
      <div style={{ width: "100%" }}>
        <YouAre />
      </div>
    </div>
  );
};

export default Home;
