import React from "react";

const Audit = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>AUDIT DE PAIE</h1>
        <p>
          La justesse des bulletins de salaire et des charges sociales est le
          premier élément pour des relations sereines avec les administrations
          et le personnel.
        </p>
        <section>
          <h2>L'audit de paie en quelques mots:</h2>
          <p>
            Appelé également audit de conformité, cette analyse vous permet
            d’évaluer les écarts existants entre les calculs de votre paie et la
            législation en vigueur (légale et/ou conventionnelle).
          </p>
          <p>
            Dans le cas d’un contrôle URSSAF ou à titre préventif, nous vous
            aidons à réduire les risques de redressement.{" "}
          </p>
          <p>
            ’audit révélera les différentes anomalies, et nous pourrons établir
            des préconisations sur les correctifs à apporter le cas échéant, et
            sécuriser vos pratiques.
          </p>
        </section>
        <section>
          <h2>Les bénéfices de l’audit</h2>
          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              Évaluer les risques de non-conformité à la législation sociale aux
              conventions collectives applicables
            </li>
            <li>
              Une meilleure appréhension des règles légales et conventionnelles
            </li>
            <li>
              Prévoir et éviter dans la mesure du possible le risque de
              redressement URSSAF
            </li>
            <li>Obtenir des pistes d’économies réalisables, le cas échéant.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Audit;
