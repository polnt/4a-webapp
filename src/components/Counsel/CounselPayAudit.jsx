import React from "react";

const PayAudit = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>AUDIT DE PAIE :</h1>
        <p>
          La justesse des bulletins de salaire et des charges sociales est le
          premier élément pour des relations sereines avec les administrations
          et le personnel.
        </p>
        <section>
          <h2>L’audit de paie en quelques mots:</h2>
          <p>
            Appelé également audit de conformité, cette analyse vous permet
            d’évaluer les écarts existants entre les calculs de votre paie et la
            législation en vigueur (légale et/ou conventionnelle).
          </p>
          <p>
            Dans le cas d’un contrôle URSSAF ou à titre préventif, nous vous
            aidons à réduire les risques de redressement.
          </p>
          <p>
            L’audit révélera les différentes anomalies, et nous pourrons établir
            des préconisations sur les correctifs à apporter le cas échéant, et
            sécuriser vos pratiques.
          </p>
        </section>
        <section>
          <h2>Les bénéfices de l’audit de paie:</h2>
          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              Évaluer les risques de non-conformité à la législation sociale ou
              aux conventions collectives applicables
            </li>
            <li>
              Une meilleure appréhension des règles légales et conventionnelles
            </li>
            <li>
              Prévoir et éviter dans la mesure du possible le risque de
              redressement URSSAF
            </li>
            <li>
              Obtenir des pistes d’économies réalisables, le cas échéant.{" "}
            </li>
          </ul>
        </section>
        <section>
          <h2>Comment se déroule un audit PAIE ?</h2>
          <div>
            <p>Il y a 4 phases dans l’audit de Paie:</p>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>La phase préparatoire durant laquelle nous allons:</li>
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                <li>
                  Collecter les documents et les informations en lien avec
                  l’activité de l’entreprise, sa structure et la réalisation de
                  la paie, la convention collective applicable, les accords
                  d’entreprise et les usages.
                </li>
                <li>
                  Nous entretenir avec la direction afin d’établir le périmètre
                  d’intervention de la mission, l’analyse portera sur un
                  périmètre de taille variée ou sur des points précis de la
                  paie.
                </li>
              </ul>
              <li>La phase de réalisation permettra:</li>
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                <li>
                  D’étudier les documents récoltés de manière approfondie afin
                  de mettre en évidence les écarts entre les calculs réalisés et
                  les textes légaux:
                </li>
                <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                  <li>DPAE et Contrat de travail de chaque salarié</li>
                  <li>
                    Vérification des salaires bruts (Heures supplémentaires,
                    éléments fixes ou variables en lien avec la convention
                    collective…)
                  </li>
                  <li>
                    Vérifications des bases de cotisations et des montants
                    versés aux organismes
                  </li>
                  <li>Vérification des allègements de cotisations</li>
                  <li>
                    Vérification des règlements (montants, déclarations, délai)
                  </li>
                  <li>Vérification de la conformité de l’OD de paie</li>
                </ul>
              </ul>
              <li>La phase de restitution:</li>
              <p>
                Elle se déroule au sein de l’entreprise et permet de présenter à
                la direction et au personnel concerné les anomalies mises en
                évidence, les correctifs à opérer afin de se mettre en
                conformité avec la réglementation. Un rapport écrit est établi
                et remis à la direction.
              </p>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PayAudit;
