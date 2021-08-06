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
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        minHeight: "250px",
        padding: "2rem 2rem",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "150px",
          justifyContent: "space-around",
        }}
      >
        <h2
          style={{
            textTransform: "uppercase",
            font: "var(--ctaFont)",
            fontSize: "2em",
          }}
        >
          Des solutions adaptées à vos besoins
        </h2>
        <p style={{ fontSize: "1.5em" }}>
          Découvrez les services que nous proposons en fonction de votre besoin
        </p>
        <p style={{ fontSize: "1.5em" }}>Vous êtes ?</p>
        <div className="solutions_btn_container">
          {solutionsData.map((solution) => (
            <>
              <button
                className="custom_btn"
                style={{
                  backgroundColor: "var(--mainPurple)",
                  color: "var(--mainCream)",
                }}
                type="button"
                value={solution.id}
                onClick={handleClick}
              >
                {solution.buttonLabel}
              </button>

              <div
                className="solutions_content"
                style={
                  selection === solution.id
                    ? { visibility: "visible" }
                    : { visibility: "hidden", left: "900px" }
                }
              >
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={solution.path}
                  >
                    <button
                      className="custom_btn"
                      type="button"
                      style={{ backgroundColor: "var(--mainOrange)" }}
                    >
                      En savoir plus
                    </button>
                  </NavLink>
                </div>
              </div>
            </>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSelection("")}
          style={
            selection.length
              ? {
                  position: "absolute",
                  top: 5,
                  right: 5,
                  border: "none",
                  backgroundColor: "transparent",
                  visibility: "visible",
                }
              : { visibility: "hidden", position: "absolute" }
          }
        >
          <CloseWindowIcon />
        </button>
      </Container>
    </Jumbotron>
  );
};

export default Solutions;
