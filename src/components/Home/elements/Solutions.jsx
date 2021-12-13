import React from "react";
import { NavLink } from "react-router-dom";
import solutionsData from "./solutionsData";
import NavigationCard from "../../Navigation/elements/NavigationCard";

const Solutions = () => {
  return (
    <section
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Les besoins de chaque entreprise sont spécifiques
      </h3>
      <p
        style={{
          marginBottom: 0,
          fontSize: "1.5em",
        }}
      >
        Chez{" "}
        <NavLink to="/l'équipe-4A" style={{ color: "var(--secPurple)" }}>
          4A Paie & RH Conseils
        </NavLink>{" "}
        nous pensons qu'il est primordial de proposer des solutions adaptées et
        pertinentes.
      </p>
      <p style={{ fontSize: "1.5em" }}>
        Nous mettons à votre disposition notre expérience et notre savoir-faire
        dans les domaines de la paie et des ressources humaines pour vous
        permettre d'éxercer votre métier en toute tranquilité.
      </p>
      <p style={{ fontSize: "1.5em" }}>
        Découvrez nos services en fonction de votre situation :
      </p>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {solutionsData.map((solution) => (
          <li>
            <NavigationCard
              path={solution.path}
              title={solution.target}
              image={solution.background}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Solutions;
