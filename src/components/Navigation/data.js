import Calculator from "../../assets/img/calculator.jpg";
import HR from "../../assets/img/pexels-polina-zimmerman.jpg";
import Counsel from "../../assets/img/pexels-mentatdgt.jpg";

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
    id: "counsel",
    title: "CONSEIL",
    path: "/conseil",
    backgroundImage: Counsel,
    children: [
      { title: "Audit de paie", path: "/conseil-et-accompagnement/audit-paie" },
      { title: "Audit RH", path: "/conseil-et-accompagnement/audit-rh" },
      { title: "Formation", path: "/conseil-et-accompagnement/formation" },
      { title: "Contrôle URSSAF", path: "/conseil-et-accompagnement/URSSAF" },
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
