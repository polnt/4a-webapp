import React from "react";

import { NavLink } from "react-router-dom";

import YouAre from "./elements/YouAre";

import { navData } from "../NavBar/data";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <h2>PAIE</h2>
          {navData[0].children?.map((item) => (
            <NavLink to={item.path}>{item.title}</NavLink>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <h2>RH</h2>
          {navData[1].children?.map((item) => (
            <NavLink to={item.path}>{item.title}</NavLink>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <h2>CONSEILS et ACCOMPAGNEMENT</h2>
          {navData[2].children?.map((item) => (
            <NavLink to={item.path}>{item.title}</NavLink>
          ))}
        </div>
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
