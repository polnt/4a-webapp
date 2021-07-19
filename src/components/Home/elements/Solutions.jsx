import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import solutionsData from "./solutionsData";

import { VscChromeClose as CloseWindowIcon } from "react-icons/vsc";

import "../../../css/Home/Solutions.css";

const Solutions = () => {
  const [selection, setSelection] = useState("");

  const handleClick = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Jumbotron
      style={{
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "white",
        boxShadow: "1px 1px 1px 1px",
      }}
    >
      <Container>
        <h2>Nos solutions pour vous</h2>
        <div style={{ display: "flex" }}>
          {solutionsData.map((solution) => (
            <div>
              <button type="button" value={solution.id} onClick={handleClick}>
                {solution.buttonLabel}
              </button>
              <div
                className={
                  selection === solution.id
                    ? "solutions_show_content"
                    : "solutions_hidden_content"
                }
              >
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <NavLink style={{ textDecoration: "none" }} to={solution.path}>
                  <button
                    type="button"
                    style={
                      selection === solution.id
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    En savoir plus
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        {selection.length > 0 && (
          <button
            type="button"
            onClick={() => setSelection("")}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <CloseWindowIcon />
          </button>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Solutions;
