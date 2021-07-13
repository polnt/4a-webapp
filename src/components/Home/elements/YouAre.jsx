import React, { useState } from "react";

const YouAre = () => {
  const [selection, setSelection] = useState("");

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  };

  const handleClick = (event) => {
    setSelection(event.target.value);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h2>Vous êtes ?</h2>
        <button type="button" value="tpe" onClick={handleClick}>
          TPE
        </button>
        <button type="button" value="pme" onClick={handleClick}>
          PME
        </button>
        <button type="button" value="office" onClick={handleClick}>
          Cabinet comptable
        </button>
      </div>
      {selection === "tpe" && (
        <div style={contentStyle}>
          <h3>
            Libérez-vous des activités chronophages, centrez-vous sur votre cœur
            de métier
          </h3>
          <p>
            Vous êtes une TPE (définition) et vous avez choisi votre cœur
            d’expertise pour vous développer, En France, la législation
            française oblige le chef d’entreprise, à dédier beaucoup de temps à
            la partie administrative. Les lois sont complexes, de lecture peu
            aisée, et change tout le temps en particulier en matière sociale.
            Nul n’est sensé ignoré la loi, mais elle reste d’accès difficile
            Dans une TPE, les moyens financiers peuvent limiter le recrutement
            en interne de salariés spécialisés en matière sociale, le risque
            étant de transmettre des bulletins et des charges erronées amenant à
            un redressement en cas de contrôle URSSAF ou de possibles conflits
            au sein de l’entreprise. L’externalisation est une excellente
            solution pour remédier à ces risques
          </p>
        </div>
      )}
      {selection === "pme" && (
        <div style={contentStyle}>
          <h3>Assurez-vous l’expertise au sein de l’entreprise</h3>
          <p>
            Vous êtes une PME (définition), votre entreprise encore à taille
            humaine nécessite surement un salarié dédié tout ou partie de son
            temps à la gestion sociale.
            <ul>
              <li>Accompagnement</li>
              <li>Externaliser la paie et conserver le RH</li>
              <li>Formation spécifique</li>
              <li>Contrôle trimestriel</li>
            </ul>
            TOP des 6 difficultés rencontrées la troisième : complexité des
            réglementations (??)
          </p>
        </div>
      )}
      {selection === "office" && (
        <div style={contentStyle}>
          <div>
            <h3>Expert comptable</h3>
            <p>
              <ul>
                <li>
                  Pôle social peu développé ou pas: sous-traiter la paie et/ou
                  RH
                </li>
                <li>
                  Pas de pôle social, difficile de développer ou trop risqué,
                  difficulté de recrutement, une offre complète pour vos
                  clients, …. Un % sur votre prix
                </li>
                <li>
                  Pôle social développé en souffrance : actuellement nous
                  cherchons une solution viable, pour l’instant possible si vous
                  avez Silae. Ou prendre la main sur votre logiciel de paie en
                  SAAS. Nous vous assurons une totale confidentialité
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h3>Avocat spécialisé en droit social</h3>
            <p>
              Vous êtes spécialiste du droit social et vous maitrisez les
              différents aspects de la gestion du personnel. On vous propose la
              possibilité d’accroitre vos services auprès de vos clients en leur
              offrant la gestion de leur paie
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouAre;
