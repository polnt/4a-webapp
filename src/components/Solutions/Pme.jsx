import React from "react";

import { NavLink } from "react-router-dom";

import ContactCTA from "../../components/_reusable/ContactCTA";

const Pme = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>PME</h1>
        <p style={{ fontSize: "2em", fontStyle: "italic" }}>
          « Assurez-vous l’expertise au sein de l’entreprise »
        </p>
        <p>
          Vous êtes une PME (définition), votre entreprise encore à taille
          humaine nécessite surement un salarié dédié tout ou partie de son
          temps à la gestion sociale. Pour garantir que votre service Paie et RH
          soit toujours à jour, en conformité avec le cadre réglementaire et
          maintienne un bon niveau de connaissance en matière sociale, nous vous
          proposons différentes solutions:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <li>
              <NavLink className="custom_link" to="/">
                Accompagnement{" "}
              </NavLink>
              de votre personnel dédié à la paie ou aux RH
            </li>
            <span>
              Vous souhaitez conserver votre partie RH, afin d’être au plus près
              du besoin de vos salariés et avoir un interlocuteur au sein même
              de votre entreprise, l’élaboration de la paie est chronophage et
              il est simple de l’
              <NavLink className="custom_link" to="/paie/externalisation">
                externaliser
              </NavLink>
              .
            </span>
          </div>
          <li style={{ marginBottom: "20px" }}>
            L’évolution de la législation peut nécessiter de suivre une{" "}
            <NavLink
              className="custom_link"
              to="/conseil-et-accompagnement/formation"
            >
              formation
            </NavLink>{" "}
            spécifique pour connaître les dernières évolutions, ou assurer le
            bon traitement de points particuliers (réduction générale,
            vérification des bases de cotisations…).
          </li>
          <li style={{ marginBottom: "20px" }}>
            Le contrôle trimestriel vous permettra de vérifier de façon
            périodique que les déclarations réalisées en fonction des bulletins
            de salaire sont conformes à la réglementation. Ce contrôle permet de
            procéder aux rectifications en cours d’année et de ce fait d’assurer
            la justesse de vos calculs.
          </li>
        </ul>
        <ContactCTA />
      </article>
    </div>
  );
};

export default Pme;
