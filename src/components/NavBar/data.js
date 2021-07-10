export const navData = [
  {
    id: "pay",
    title: "PAIE",
    children: [
      { title: "Externalisation", path: "/paie/externalisation" },
      { title: "Gestion interne", path: "/paie/gestion-interne" },
      { title: "Audit de paie", path: "/paie/audit" },
    ],
  },
  {
    id: "hr",
    title: "RH",
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
    title: "CONSEILS et ACCOMPAGNEMENT",
    children: [
      { title: "Audit", path: "" },
      { title: "Formation", path: "" },
      { title: "Contrôle URSSAF", path: "" },
      { title: "Gestion entreprise", path: "" },
    ],
  },
  {
    id: "news",
    title: "ACTUALITÉS",
    children: [
      { title: "À la une", path: "" },
      { title: "Toute l'actualité", path: "" },
    ],
  },
  {
    id: "about",
    title: "QUI SOMMES-NOUS ?",
    children: [
      { title: "Présentation de l'équipe", path: "/qui-sommes-nous" },
      { title: "Nos engagements", path: "/qui-sommes-nous" },
    ],
  },
  {
    id: "FAQ",
    title: "LES QUESTIONS FRÉQUENTES",
    children: [{ title: "FAQs", path: "" }],
  },
];
