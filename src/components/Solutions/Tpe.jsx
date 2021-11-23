import React from "react";

import { NavLink } from "react-router-dom";

import ContactCTA from "../../components/_reusable/ContactCTA";

const Tpe = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>TPE</h1>
        <p style={{ fontSize: "2em", fontStyle: "italic" }}>
          « Libérez-vous des activités chronophages, centrez-vous sur votre cœur
          de métier »
        </p>
        <p>
          Vous êtes une TPE (définition) et vous avez choisi votre cœur
          d’expertise pour vous développer. En France, la législation française
          oblige le chef d’entreprise à dédier beaucoup de temps à la partie
          administrative. Les lois sont complexes, de lecture peu aisée, et
          changent tout le temps, en particulier en matière sociale.
        </p>
        <p>
          Si nul n’est censé ignorer la loi, elle reste d’accès difficile à la
          grande majorité d’entre nous
        </p>
        <p>
          Dans une TPE, les moyens financiers peuvent limiter le recrutement en
          interne de salariés spécialisés en matière sociale, le risque étant de
          transmettre des bulletins et des charges erronées amenant à un
          redressement en cas de contrôle URSSAF ou de possibles conflits au
          sein de l’entreprise. Votre personnel n'a pas à se préoccuper des
          problèmes quotidiens liés à la paie ni de l'évolution éventuelle de la
          législation.
        </p>
        <p>
          L’
          <NavLink className="custom_link" to="/paie/externalisation">
            externalisation
          </NavLink>{" "}
          est une excellente solution pour remédier à ces risques
        </p>
        <p>Découvrez nos autres solutions:</p>

        <ul>
          <li>
            <NavLink className="custom_link" to="/paie/gestion-interne">
              Gestion Interne
            </NavLink>
          </li>
          <li>
            <NavLink className="custom_link" to="/paie/audit">
              Audit de paie
            </NavLink>
          </li>
        </ul>
        <ContactCTA />
      </article>
    </div>
  );
};

export default Tpe;
