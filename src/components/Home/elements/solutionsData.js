import CoWomen from "../../../assets/img/pexels-cowomen.jpg";
import Expert from "../../../assets/img/expert.jpg";
import Partnership from "../../../assets/img/partnership.png";
import TPE from "../../../assets/img/tpe.jpg";

const solutionsData = [
  {
    id: "tpe",
    target: "TPE",
    title: "TPE: centrez-vous sur votre cœur de métier",
    text: "Vous avez peu de temps à dédier à l'administratif comme la réalisation des bulletins de paie",
    path: "/nos-solutions/tpe",
    background: TPE,
  },
  {
    id: "pme",
    target: "PME",
    title: "PME: assurez-vous l’expertise au sein de l’entreprise",
    text: "Vous assurez souvent une partie de la gestion du personnel en interne, quelles compétences vous manque-t-il?",
    path: "/nos-solutions/pme",
    background: CoWomen,
  },
  {
    id: "office",
    target: "Cabinet comptable",
    title: "Expert comptable",
    text: "Difficile de trouver de nouveaux collaborateurs, comment assurer l’évolution du Pôle social en fonction du mouvement de la clientèle",
    path: "/nos-solutions/expert-comptable",
    background: Expert,
  },
  {
    id: "lawyer",
    target: "Avocat",
    title: "Avocat spécialisé en droit social",
    text: "Vous maitrisez le droit social, mais qu'en est-il des techniques de paie?",
    path: "/nos-solutions/cabinet-juridique",
    background: Partnership,
    backgroundPosition: "unset",
  },
];

export default solutionsData;
