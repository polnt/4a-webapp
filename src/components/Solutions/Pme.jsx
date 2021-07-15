import React from "react";

import { NavLink } from "react-router-dom";

import ContactCTA from "../../components/_reusable/ContactCTA";

const Pme = () => {
  return (
    <div>
      <h1>PME</h1>
      <h2>Assurez-vous l’expertise au sein de l’entreprise</h2>
      <p>
        Vous êtes une PME (définition), votre entreprise encore à taille humaine
        nécessite surement un salarié dédié tout ou partie de son temps à la
        gestion sociale. Pour garantir que votre service Paie et RH soit
        toujours à jour, en conformité avec le cadre réglementaire et maintienne
        un bon niveau de connaissance en matière sociale, nous vous proposons
        différentes solutions:
      </p>
      <ul>
        <li>
          <NavLink to="/">Accompagnement </NavLink>de votre personnel dédié à la
          paie ou aux RH
        </li>
        <li>
          Vous souhaitez conserver votre partie RH, afin d’être au plus près du
          besoin de vos salariés et avoir un interlocuteur au sein même de votre
          entreprise, l’élaboration de la paie est chronophage et il est simple
          de l’<NavLink to="/paie/externalisation">externaliser</NavLink>.
        </li>
        <li>
          L’évolution de la législation <NavLink to="/">Formation </NavLink>
          spécifique sur des points particulier, mise à jour des dernières
          évolutions
        </li>
        <li>
          <NavLink to="/">Contrôle trimestriel</NavLink>
        </li>
      </ul>
      <p>
        TOP des 6 difficultés rencontrées la troisième : complexité des
        réglementations
      </p>
      <p>
        <a
          href="http://corporate.europages.fr/actualites/3-pme-europeennes-top-6-des-difficultes-rencontrees/
"
        >
          http://corporate.europages.fr/actualites/3-pme-europeennes-top-6-des-difficultes-rencontrees/
        </a>
      </p>
      <ContactCTA />
    </div>
  );
};

export default Pme;
