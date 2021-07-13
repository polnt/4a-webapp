import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Solutions = () => {
  const [selection, setSelection] = useState("");

  const hidedContentStyle = {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 2000,
  };

  const showContentStyle = {
    height: "100%",
    left: 0,
    transition: "left 0.25s ease",
    backgroundColor: "#e9ecef",
    padding: "64px 32px 64px 32px",
  };

  const handleClick = (event) => {
    setSelection(event.target.value);
  };
  return (
    <Jumbotron
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
      }}
    >
      <Container>
        <h2>Nos solutions pour vous</h2>
        <button type="button" value="tpe" onClick={handleClick}>
          TPE
        </button>
        <button type="button" value="pme" onClick={handleClick}>
          PME
        </button>
        <button type="button" value="office" onClick={handleClick}>
          Cabinet comptable
        </button>
        <button type="button" value="lawyer" onClick={handleClick}>
          Avocat
        </button>
        <div
          style={
            selection === "tpe"
              ? {
                  ...hidedContentStyle,
                  ...showContentStyle,
                }
              : hidedContentStyle
          }
        >
          <h3>
            Libérez-vous des activités chronophages, centrez-vous sur votre cœur
            de métier
          </h3>
          <p>lorem ipsum</p>
          <button type="button">En savoir plus</button>
        </div>
        <div
          style={
            selection === "pme"
              ? {
                  ...hidedContentStyle,
                  ...showContentStyle,
                }
              : hidedContentStyle
          }
        >
          <h3>Assurez-vous l’expertise au sein de l’entreprise</h3>

          <p>lorem ipsum</p>
          <button type="button">En savoir plus</button>
        </div>
        <div
          style={
            selection === "office"
              ? {
                  ...hidedContentStyle,
                  ...showContentStyle,
                }
              : hidedContentStyle
          }
        >
          <h3>Expert comptable</h3>

          <p>lorem ipsum</p>
          <button type="button">En savoir plus</button>
        </div>
        <div
          style={
            selection === "lawyer"
              ? {
                  ...hidedContentStyle,
                  ...showContentStyle,
                }
              : hidedContentStyle
          }
        >
          <h3>Avocat spécialisé en droit social</h3>

          <p>lorem ipsum</p>
          <button type="button">En savoir plus</button>
        </div>
        {selection.length > 0 && (
          <button
            type="button"
            onClick={() => setSelection("")}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            X
          </button>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Solutions;
