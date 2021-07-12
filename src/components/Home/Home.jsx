import React from "react";

import YouAre from "./elements/YouAre";
import CTA from "./elements/CTA";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div
        style={
          {
            // display: "flex",
            // justifyContent: "center",
          }
        }
      >
        <CTA />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <YouAre />
      </div>
    </div>
  );
};

export default Home;
