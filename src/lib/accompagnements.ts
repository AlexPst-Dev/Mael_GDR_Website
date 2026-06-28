export interface Accompagnement {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  /** true = image à gauche, texte à droite */
  imageLeft: boolean;
}

export const accompagnements: Accompagnement[] = [
  {
    id: "course-trail",
    tag: "Plein air",
    title: "Course à pied & trail",
    description:
      "Du tout premier footing au sentier breton : on progresse sans se blesser, avec le plaisir de courir comme moteur.",
    features: [
      "Débutant — démarrer et tenir dans la durée",
      "Intermédiaire — franchir un cap, premier trail",
      "Plan d'entraînement personnalisé",
      "Sorties sur les sentiers autour de Montfort",
    ],
    image: "/images/course-trail.jpg",
    imageAlt: "Course à pied et trail en Bretagne avec Maël Gdr",
    imageLeft: false,
  },
  {
    id: "perte-de-poids",
    tag: "Objectif",
    title: "Perte de poids",
    description:
      "Une approche durable et bienveillante : on bâtit des habitudes solides plutôt qu'un régime de plus.",
    features: [
      "Programme progressif et tenable",
      "Conseils d'hygiène de vie au quotidien",
      "Suivi régulier de vos progrès",
      "Mouvement adapté à votre condition",
    ],
    image: "/images/perte-de-poids.png",
    imageAlt: "Coaching perte de poids avec Maël Gdr",
    imageLeft: true,
  },
  {
    id: "cap-retraite",
    tag: "Dès 60 ans",
    title: "Cap retraite",
    description:
      "Aborder la retraite en pleine forme, éviter les chutes et garder du lien grâce à des séances qui ont du sens.",
    features: [
      "Séances adaptées à votre condition",
      "Cours en petit groupe pour le lien social",
      "Entretien de l'autonomie & de l'équilibre",
      "Une activité régulière, avec du sens",
    ],
    image: "/images/cap-retraite.png",
    imageAlt: "Activité physique adaptée pour les seniors avec Maël Gdr",
    imageLeft: false,
  },
];
