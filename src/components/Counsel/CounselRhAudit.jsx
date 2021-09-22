import React from "react";

const RhAudit = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>AUDIT RH</h1>
        <p>
          La bonne gestion des ressources humaines d’une entreprise est un
          élément essentiel au bon fonctionnement de celle-ci.
        </p>
        <section style={{ marginBottom: "20px" }}>
          <h2>L’audit RH en quelques mots:</h2>
          <p>
            L’audit RH permet d’évaluer la pertinence de la gestion des
            ressources humaines d’une entreprise. Celui-ci est réalisé grâce à
            un ensemble de techniques qui servira à mesurer les écarts entre les
            pratiques du service RH et les exigences légales, conventionnelles
            et jurisprudentielles dans le but de mettre en place des axes
            d’amélioration et de mise en conformité.
          </p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Les bénéfices d’un audit RH:</h2>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <li>Faire des économies en réduisant le taux d’absentéisme</li>
            <li>Gagner du temps en améliorant les processus de gestion</li>
            <li>
              Diminuer les contentieux en établissant un climat de confiance et
              en assurant la mise en conformité de l’entreprise face aux
              obligations légales
            </li>
            <li>
              Anticiper les désagréments professionnels, sociaux et sanitaires
              (accident du travail, maladie professionnelle, grève …)
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2>Comment se déroule un audit RH ?</h2>
          <p>Il y a 3 phases dans l’audit RH:</p>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <li>La phase préparatoire durant laquelle nous allons:</li>
            <ul
              style={{
                listStyleType: "circle",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <li>
                Définir le contexte professionnel dans lequel s’inscrit l’audit,
              </li>
              <li>
                Établir les raisons qui motivent la réalisation d’un audit RH
                afin de clarifier les attentes de l’entreprise,
              </li>
              <li>
                Dégager le ou les thèmes sur lesquels porteront l’audit, puis
                définir une stratégie,
              </li>
              <li>
                Détailler les objectifs à atteindre suivant des critères
                quantitatifs et qualitatifs.
              </li>
            </ul>
            <li>
              La phase de réalisation se déroulera au sein de l’entreprise afin
              de:
            </li>
            <ul
              style={{
                listStyleType: "circle",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <li>
                Contrôler en temps réel les risques théoriques identifiés lors
                de la phase de préparation
              </li>
              <li>
                Approfondir l’analyse dans le cadre d’une approche factuelle:
              </li>
              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                <li>
                  Recueillir les informations nécessaires en vue d’identifier
                  les bonnes pratiques et celles risquant de produire des effets
                  indésirables sur l’organisation de l’entreprise.
                </li>
                <li>Analyser les résultats</li>
                <li>
                  Identifier les potentialités à développer et les points
                  d’achoppements
                </li>
                <li>
                  Dégager un plan d'action en priorisant les éléments à
                  corriger.
                </li>
              </ul>
            </ul>
            <span>Exemples de points abordés :</span>
            <ul
              style={{
                listStyleType: "disc",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <li>Obligations d’affichage</li>
              <li>Vérification contrats de travail + DPAE</li>
              <li>Égalité homme femme</li>
              <li>
                Vérifier formation ou augmentation de salaire ou évolution
                professionnelle
              </li>
              <li>Respect quota travailleur handicapé</li>
              <li>Sécurité, hygiène et conditions de travail</li>
              <li>
                Communication avec les représentants du personnel et l’ensemble
                des salariés
              </li>
            </ul>
            <li>La phase de restitution</li>
            <p>
              L’audit s’achève par la rédaction d’un rapport de synthèse qui
              rappelle la situation et les améliorations à apporter. Ce rapport
              peut éventuellement déboucher sur un plan d’action destiné aux
              personnels concernés pour les aider à mettre en œuvre les actions
              à renforcer, les méthodes de gestion à modifier et à consolider
              les bonnes pratiques.
            </p>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default RhAudit;
