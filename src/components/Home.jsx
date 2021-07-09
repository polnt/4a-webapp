import React from "react";

import { NavLink } from "react-router-dom";

import { navData } from "./NavBar/data";

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
          <h3>PAIE</h3>
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
          <h3>RH</h3>
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
          <h3>CONSEILS et ACCOMPAGNEMENT</h3>
          {navData[2].children?.map((item) => (
            <NavLink to={item.path}>{item.title}</NavLink>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h3>Vous êtes ?</h3>
          <button>TPE</button>
          <button>PME</button>
          <button>Cabinet comptable</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
