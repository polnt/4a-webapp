import React from "react";

import { NavLink } from "react-router-dom";

import { useNav } from "../../hooks";

import NavBarBtn from "./elements/NavBarBtn";

import { navData } from "./data";

import Logo4A from "../../assets/Logo4A_150x150.png";

const NavBar = () => {
  const { toggle, setToggle } = useNav();

  return (
    <div style={{ display: "block" }}>
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
