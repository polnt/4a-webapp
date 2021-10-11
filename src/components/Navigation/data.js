import Calculator from "../../assets/img/calculator.jpg";
import HR from "../../assets/img/pexels-polina-zimmerman.jpg";
import Counsel from "../../assets/img/pexels-mentatdgt.jpg";
import {
  PayAudit,
  HrAudit,
  Formation,
  InternalPay,
  InternalHr,
  HS,
  PAS,
  TrialPeriod,
  URSSAF,
} from "../../assets/img/navPage";

import PayAudit2 from "../../assets/img/navPage/PayAudit.jpg";

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
      {
        title: "Gestion interne",
        path: "/paie/gestion-interne",
        image: InternalPay,
      },
      { title: "Audit de paie", path: "/paie/audit", image: PayAudit },
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
        title: "Gestion Interne",
        path: "/rh/gestion-interne-rh",
      },
      { title: "Audit RH", path: "/rh/audit", image: HrAudit },
    ],
  },
  {
    id: "counsel",
    title: "CONSEIL",
    path: "/conseil-et-accompagnement",
    backgroundImage: Counsel,
    children: [
      { title: "Audit de paie", path: "/conseil-et-accompagnement/audit-paie" },
      { title: "Audit RH", path: "/conseil-et-accompagnement/audit-rh" },
      {
        title: "Formation",
        path: "/conseil-et-accompagnement/formation",
        image: Formation,
      },
      {
        title: "Contrôle URSSAF",
        path: "/conseil-et-accompagnement/URSSAF",
        image: URSSAF,
      },
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
