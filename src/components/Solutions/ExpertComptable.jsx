import React from "react";

import ContactCTA from "../../components/_reusable/ContactCTA";

const ExpertComptable = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>EXPERT COMPTABLE</h1>
        <p style={{ fontSize: "2em", fontStyle: "italic" }}>
          « Gérer simplement votre pôle social »
        </p>
        <p>
          La gestion du social est de plus en plus complexe, la législation
          évolue très rapidement et il devient difficile de dédier le temps
          nécessaire aux actualisations et aux mises à jour. De plus, la crise
          sanitaire a mis à mal bien des services Paie et le recrutement
          aujourd’hui est de plus en plus difficile.
        </p>
        <p>
          <span
            style={{
              display: "flex",
              color: "var(--secPurple)",
              fontWeight: "bold",
            }}
          >
            Votre pôle social est peu développé ?
          </span>
          Vous pouvez nous confier la partie paie et/ou RH en restant
          l'interlocuteur de votre client.
        </p>
        <p>
          <span
            style={{
              display: "flex",
              color: "var(--secPurple)",
              fontWeight: "bold",
            }}
          >
            Vous n’avez pas de pôle social ?
          </span>
          Il vous semble difficile de le développer ou trop risqué, vous
          rencontrez des difficultés de recrutement ? Proposez une offre
          complète pour vos clients en établissant un partenariat avec 4A Paie
          et RH Conseils.
        </p>
        <p>
          <span
            style={{
              display: "flex",
              color: "var(--secPurple)",
              fontWeight: "bold",
            }}
          >
            Votre pôle social est en souffrance ?
          </span>{" "}
          Selon le logiciel avec lequel vous travaillez, nous pouvons prendre la
          main en SAAS afin de pallier temporairement à l’absence d’un de vos
          collaborateurs ou un surcroît de nouveaux clients le temps pour vous
          de réorganiser votre service . Nous vous assurons une totale
          confidentialité.
        </p>
        <ContactCTA />
      </article>
    </div>
  );
};

export default ExpertComptable;
