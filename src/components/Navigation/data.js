import Calculator from "../../assets/img/calculator.jpg";
import HR from "../../assets/img/pexels-polina-zimmerman.jpg";
import Advice from "../../assets/img/pexels-mentatdgt.jpg";

export const navData = [
  { id: "home", title: "ACCUEIL", path: "/" },
  {
    id: "solutions",
    title: "NOS SOLUTIONS",
    path: "/nos-solutions",
    children: [
      { title: "TPE", path: "/nos-solutions/tpe" },
      { title: "PME", path: "/nos-solutions/pme" },
      { title: "Cabinet comptable", path: "/nos-solutions/expert-comptable" },
      { title: "Cabinet juridique", path: "/nos-solutions/cabinet-juridique" },
    ],
  },
  {
    id: "pay",
    title: "PAIE",
    path: "/paie",
    backgroundImage: Calculator,
    size: "cover",
    children: [
      { title: "Externalisation", path: "/paie/externalisation" },
      { title: "Gestion interne", path: "/paie/gestion-interne" },
      { title: "Audit de paie", path: "/paie/audit" },
    ],
  },
  {
    id: "hr",
    title: "RH",
    path: "/rh",
    backgroundImage: HR,
    size: "contain",
    children: [
      {
        title: "Entrées et sorties des salariés",
        path: "/rh/vie-du-contrat",
      },
      { title: "Les procédures", path: "/rh/procedures" },
      { title: "Audit RH", path: "/rh/audit" },
    ],
  },
  {
    id: "advice",
    title: "CONSEIL",
    path: "/conseil",
    backgroundImage: Advice,
    children: [
      { title: "Audit", path: "" },
      { title: "Formation", path: "" },
      { title: "Contrôle URSSAF", path: "" },
      // { title: "Gestion entreprise", path: "" },
    ],
  },
  {
    id: "about",
    title: "QUI SOMMES-NOUS ?",
    path: "/l'équipe-4A",
    children: [
      { title: "Présentation de l'équipe", path: "/l'équipe-4A" },
      { title: "Nos engagements", path: "/l'équipe-4A" },
    ],
  },
  {
    id: "FAQ",
    path: "/faq",
    title: "LES QUESTIONS FRÉQUENTES",
  },
];
