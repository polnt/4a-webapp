import React from "react";

import ContactCTA from "../../components/_reusable/ContactCTA";

const Avocat = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>AVOCAT spécialisé en droit social</h1>
        <p style={{ fontSize: "2em", fontStyle: "italic" }}>
          « Augmenter votre expertise en technique de paie »
        </p>
        <p>
          Vous êtes spécialiste du droit social et vous maitrisez les différents
          aspects de la gestion du personnel.
        </p>
        <p>
          Nous vous proposons la possibilité d'accroître vos services auprès de
          vos clients en leur offrant la gestion de leur paie, vous vous
          épargner la difficulté de recruter du personnel spécialisé en paie et
          l’ensemble des frais liés aux équipements nécessaires pour la
          réalisation des bulletins. Nous vous assurons une totale
          confidentialité.
        </p>
        <p>
          Certains de vos dossiers requièrent de nombreux calculs pour évaluer
          les indemnités à réclamer ou à contre dire. Nous sommes à votre
          disposition au travers de nos moyens techniques et notre expertise
          pour des évaluations rapides et justifiées.
        </p>
        <ContactCTA />
      </article>
    </div>
  );
};

export default Avocat;
