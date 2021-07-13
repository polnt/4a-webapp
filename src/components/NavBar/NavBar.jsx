import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import NavBarBtn from "./elements/NavBarBtn";

import { navData } from "./data";

import Logo4A from "../../assets/Logo4A_150x150.png";

const NavBar = () => {
  const [toggle, setToggle] = useState({
    pay: false,
    hr: false,
    advice: false,
  });

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        backgroundColor: "white",
        border: "1px solid black",
        width: "100%",
      }}
    >
      <NavLink to="/">
        <img src={Logo4A} alt="logo entreprise" />
      </NavLink>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "nowrap",
        }}
      >
        {navData.map((item) => (
          <NavBarBtn item={item} toggle={toggle} setToggle={setToggle} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
