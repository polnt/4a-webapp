import React from "react";

import YouAre from "./elements/YouAre";
import CTA from "./elements/CTA";

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>HOME</h1>
      <div style={{ width: "100%" }}>
        <CTA />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 12fr 1fr",
          width: "100%",
        }}
      >
        <YouAre />
      </div>
    </div>
  );
};

export default Home;
