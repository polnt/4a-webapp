import React from "react";

const Team = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1 style={{ textTransform: "uppercase" }}>Qui sommes-nous ?</h1>
        <p>
          4A Paie & Conseils RH c’est la rencontre de 2 professionnelles de la
          paie et du RH.
        </p>
        <p>
          L’envie de mettre en commun nos différentes expertises pour un même
          objectif : « sécuriser le social de votre entreprise ».
        </p>
        <p>
          Répondre aux demandes des entreprises en apportant une offre experte
          et complète en matière de gestion du personnel.
        </p>
        <p>
          Tant d’un point de vue de la technicité de paie (réalisation des
          bulletins et de l’ensemble des déclarations liés au contrat de
          travail), de la gestion RH (relation avec les représentants du
          personnel, gestion des embauches et sortie…), ou du point de vue
          juridique (droit du travail, convention collectives, jurisprudences,
          cours de cassations...)
        </p>
        <section>
          <h2 style={{ textTransform: "uppercase" }}>L'équipe 4A</h2>
          <p>Pres Magali</p>
          <p>Pres Sophie</p>
        </section>
      </article>
    </div>
  );
};

export default Team;
