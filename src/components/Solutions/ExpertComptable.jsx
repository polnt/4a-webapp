import React from "react";

import ContactCTA from "../../components/_reusable/ContactCTA";

const ExpertComptable = () => {
  return (
    <div className="container_page">
      <div className="content_page">
        <h1>EXPERT COMPTABLE</h1>
        <h2>Gérer simplement votre pôle social</h2>
        <p>
          La gestion du social est de plus en plus complexe, la législation
          évolue très rapidement et il devient difficile de dédier le temps
          nécessaire aux actualisations et aux mises à jour. De plus, la crise
          sanitaire a mis à mal bien des services Paie et le recrutement
          aujourd’hui est de plus en plus difficile.
        </p>
        <p>
          Votre Pôle social est peu développé: sous-traiter la paie et/ou RH en
          restant l'interlocuteur de votre client.
        </p>
        <p>
          Vous n’avez pas de pôle social: il vous semble difficile de le
          développer ou trop risqué, vous rencontrez des difficultés de
          recrutement, proposez une offre complète pour vos clients en
          établissant un partenariat avec 4A Paie et RH Conseils.
        </p>
        <p>
          Pôle social développé en souffrance : actuellement nous cherchons une
          solution viable, pour l’instant possible si vous avez Silae. Ou
          prendre la main sur votre logiciel de paie en SAAS. Nous vous assurons
          une totale confidentialité.
        </p>
        <ContactCTA />
      </div>
    </div>
  );
};

export default ExpertComptable;
