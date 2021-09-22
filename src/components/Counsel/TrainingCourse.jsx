import React from "react";

const TrainingCourse = () => {
  return (
    <div className="container_page cover_page">
      <article className="content_page">
        <h1>FORMATION</h1>
        <p>
          Nous vous proposons des formations sur mesure en fonction de vos
          besoins:
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          <li>Gestion des absences</li>
          <li>Calcul de la maladie</li>
          <li>Gestion des congés payés</li>
          <li>Indemnisation des heures complémentaires et supplémentaires</li>
          <li>Comprendre un bulletin de salaire</li>
          <li>Calcul des allègements</li>
          <li>Vérification des bases de cotisations</li>
          <li>L’activité partielle</li>
          <li>Le départ du salarié</li>
          <li>...</li>
        </ul>
      </article>
    </div>
  );
};

export default TrainingCourse;
