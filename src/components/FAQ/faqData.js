export const faqData = [
  {
    id: 0,
    quote:
      "Quand je reçois le bulletin, j’ai du mal à comprendre le nombre de jours notés comme congés payés",
    law: "Ce que nous dit la loi : Un salarié qui a travaillé pendant un an a droit à 5 semaines de congés.",
    content: [
      "La première question à laquelle nous devons répondre est quelle unité a été retenue pour le décompte des congés payés : jours ouvrés ou jours ouvrables ?",
      "Une semaine de congé correspond à 5 jours ouvrés (7 jours calendaires moins deux jours de repos dont le dimanche) ou 6 jours ouvrables (7 jours calendaires moins le dimanche).",
      "Le premier jour qui est considéré comme congés payés, indépendamment de si le décompte se fait en jours ouvrés ou ouvrables, est le premier jour d’absence où le salarié aurait dû reprendre son poste s’il n’était pas en vacances.",
      "A partir de ce moment, chaque jour est un congé payé, sauf les dimanches en jours ouvrables et sauf les dimanches et le deuxième jour de repos en jours ouvrés jusqu’à la veille de sa reprise.",
    ],
  },
  {
    id: 1,
    quote:
      "Pourquoi la rémunération déclarée aux impôts n’est pas le montant que j’ai perçu durant l’année ?",
    content: [
      "Au début c’était simple : la rémunération déclarée auprès des impôts correspond au salaire brut soumis à cotisations moins les cotisations salariales (cotisations déduites du salaire brut), ce qui devrait correspondre au net à payer.",
      "Toutefois la loi vient insérer un certain nombre d’exceptions : les cotisations que l’on déduit sont celles considérées comme déductibles. Aujourd’hui, dans le cas général, une partie de la CSG/CRDS est non déductible à hauteur de 2.9%. De plus, la part patronale de la mutuelle (ou frais de santé payé par l’employeur) est soumise à l’impôt sur le revenu. Dans la mesure où la loi prévoit des limites aux exonérations : prévoyance, retraites supplémentaires, voire certains revenus non soumis aux cotisations comme certaines indemnités de départ qui peuvent aussi être soumis à l’impôt sur le revenu.",
    ],
  },
  {
    id: 2,
    quote: "Quand suis-je obligé de maintenir le salaire en cas de maladie ?",
    law: "Ce que nous dit la loi : un salarié ayant un an d’ancienneté dans l’entreprise à droit à un maintien de salaire en cas de maladie à partir du 8ème jour d’arrêt à hauteur de 90% de son salaire brut sous déduction des IJSS brutes reçues.",
    content: [
      "C’est le « minimum syndical ». Votre convention collective peut être plus favorable ou faire un calcul sur le net et non sur le brut. Il est donc nécessaire de vérifier les obligations de votre convention.",
      "Si la convention collective est moins favorable vous devez appliquer la loi.",
      "En tout état de cause, vous devez transmettre sans délai, les informations relatives à l’arrêt maladie du salarié à votre gestionnaire de paie qui établira l’attestation de salaire pour l’indemnisation de la CPAM et vous indiquera la durée et le taux de l’indemnisation en fonction de l’ancienneté de celui-ci.",
    ],
  },
  {
    id: 3,
    quote: "Histoire de PAS",
    content: [
      "L’employeur n’a pas la main sur le taux appliqué dans le bulletin de salaire. Si le salarié n’est pas d’accord sur le taux il faut qu’il prenne contact avec son service des impôts.",
      "Comment ça marche : Chaque mois, l’employeur réalise une DSN, fichier dans lequel les informations relatives au salarié présent dans l’entreprise sont transmis aux organismes dont la DGFiP. Par retour de fichier la Direction générale des finances publiques qui détient le taux effectif de la dernière déclaration sur les revenus du salarié, indique le taux à appliquer avec une référence qui permet d’éviter les manipulations frauduleuses. Ce taux sera inséré dès le mois suivant. Dans le cas d’une nouvelle embauche, l’employeur a l’obligation d’appliquer le taux neutre du barème de la DGFIP.",
    ],
  },
  {
    id: 4,
    quote:
      "Quelle différence entre heures supplémentaires et complémentaires ?",
    content: [
      "Non, les heures supplémentaires ne viennent pas à la suite des heures complémentaires.",
      "On parle d’heures supplémentaires pour un salarié à temps complet (celui qui travaille 35 heures par semaine). Les heures supplémentaires sont celles réalisées au-delà de la durée légale.",
      "On parle d’heures complémentaires pour les salariés à temps partiel. Ceux sont les heures réalisées au-delà du temps contractuel (temps noté sur son contrat) du salarié, sans jamais atteindre la durée légale du travail.",
      "La majoration a appliquer dépend de règles différentes et de votre convention collective.",
    ],
  },
  {
    id: 5,
    quote: "Quelle durée pour la période d’essai :",
    caution:
      "La période d’essai n’est pas obligatoire, elle ne devient effective que si elle est clairement mentionnée sur le contrat.",
    content: [
      "Nous conseillons fortement de l’insérer systématiquement dans le contrat ou la lettre d’embauche. Cette période permet à chacune des parties de vérifier si la relation contractuelle correspond aux attentes de chacun.",
      "La durée de la période d’essai dépend de votre convention collective, la loi encadre seulement les durées maximales tant pour les CDI que les CDD.",
      {
        title: "Pour les CDI:",
        list: [
          "2 mois pour les ouvriers et les employés (4 mois en cas de renouvellement);",
          "3 mois pour les agents de maîtrise et les techniciens (6 mois en cas de renouvellement);",
          "4 mois pour les cadres (8 mois en cas de renouvellement).",
        ],
        content:
          "La période d’essai peut être renouvelable une fois, sous certaines conditions.",
      },
      {
        title: "Pour les CDD:",
        content:
          "La période d’essai ne peut pas excéder une durée calculée à raison d’un jour par semaine, dans la limite de 2 semaines si la durée du contrat à durée déterminée ne dépasse pas 6 mois et de 1 mois, dans les autres cas.",
      },
    ],
  },
];
