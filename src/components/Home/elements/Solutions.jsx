import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import solutionsData from "./solutionsData";

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
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Container>
        <h2>Nos solutions pour vous</h2>
        <div style={{ display: "flex", height: "100%" }}>
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
              </div>
            </div>
          ))}
        </div>
        {selection.length > 0 && (
          <button
            type="button"
            onClick={() => setSelection("")}
            style={{ position: "absolute", top: 5, right: 5, border: "none" }}
          >
            X
          </button>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Solutions;
