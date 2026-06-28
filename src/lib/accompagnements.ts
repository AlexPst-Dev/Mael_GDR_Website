// ─── Types ────────────────────────────────────────────────────────────────────

export interface Accompagnement {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  /** true = image à gauche, texte à droite (section cards sur la page d'accueil) */
  imageLeft: boolean;
  /** Données enrichies pour la page dédiée */
  page: AccompagnementPage;
}

export interface AccompagnementPage {
  /** Titre SEO */
  metaTitle: string;
  metaDescription: string;
  /** Section philosophie */
  philosophieTitle: string;
  philosophieParagraphs: string[];
  /** Section "Ce que je propose" */
  propositions: string[];
  /** Image de fond du header de la page dédiée */
  headerImage: string;
  /** Section "Pourquoi un coach" */
  whyCards: WhyCard[];
}

export interface WhyCard {
  emoji: string;
  title: string;
  description: string;
}

// ─── Données ──────────────────────────────────────────────────────────────────

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
    page: {
      metaTitle: "Course à pied & Trail — Maël Gdr, coach sportif à Rennes",
      metaDescription:
        "Coaching course à pied et trail autour de Montfort-sur-Meu et Rennes. Séances progressives, plans d'entraînement personnalisés et sorties encadrées.",
      headerImage: "/images/foret-broceliande.jpg",
      philosophieTitle: "Courir pour le plaisir, à ton rythme",
      philosophieParagraphs: [
        "Ici, pas de chrono qui dicte ta course, pas d'objectif imposé, pas de rythme à tenir coûte que coûte. Je cours pour le plaisir, pour me dépasser à ma façon — et c'est exactement ce que je veux t'apporter.",
        "Chacun a son rythme, ses objectifs, son temps à consacrer à la course. Ce qui compte, c'est de bouger, de découvrir, de se sentir vivant sur un sentier. Mon rôle, c'est de t'accompagner progressivement, sans te brusquer, pour que tu ne te blesses pas et que tu prennes du plaisir à chaque foulée.",
        "On avance ensemble, à ton rythme, vers la meilleure version de toi-même.",
      ],
      propositions: [
        "Séances progressives adaptées à votre niveau (débutant à avancé)",
        "Découverte de nouveaux sentiers autour de Montfort",
        "Plans d'entraînement personnalisés semaine par semaine",
        "Sorties encadrées en groupe ou en individuel",
        "Conseils nutrition, récupération et équipement trail",
      ],
      whyCards: [
        {
          emoji: "🛡️",
          title: "Progresser sans se blesser",
          description: "Une charge dosée séance après séance, pour durer.",
        },
        {
          emoji: "🔥",
          title: "Rester motivé sur la durée",
          description: "Un cap clair, un suivi régulier, l'envie de revenir.",
        },
        {
          emoji: "🎯",
          title: "Atteindre ses objectifs",
          description: "Premier 10 km, trail ou record perso : on vise juste.",
        },
      ],
    },
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
    page: {
      metaTitle: "Perte de poids — Maël Gdr, coach sportif à Rennes",
      metaDescription:
        "Coaching perte de poids durable autour de Rennes et Montfort-sur-Meu. Approche bienveillante, programme personnalisé, suivi régulier.",
      headerImage: "/images/perte-de-poids.png",
      philosophieTitle: "Pas un régime de plus, un nouvel équilibre",
      philosophieParagraphs: [
        "Perdre du poids, ce n'est pas se priver ni se punir. C'est retrouver du plaisir à bouger, comprendre son corps et installer des habitudes qui tiennent dans le temps — pas juste quelques semaines.",
        "Chacun part d'un point différent, avec son rythme de vie, ses contraintes et son histoire. Mon rôle, c'est de t'accompagner sans jugement, en dosant l'effort pour que tu progresses sans te décourager ni te blesser.",
        "On avance ensemble, étape par étape, vers une version de toi plus légère, plus forte et surtout plus durable.",
      ],
      propositions: [
        "Un programme progressif et tenable, adapté à votre quotidien",
        "Des conseils d'hygiène de vie simples à mettre en place",
        "Un suivi régulier de vos progrès, au-delà de la balance",
        "Du mouvement adapté à votre condition physique",
        "Un accompagnement sans jugement, à votre rythme",
      ],
      whyCards: [
        {
          emoji: "🌱",
          title: "Des résultats qui durent",
          description:
            "On installe des habitudes, pas un régime express qui rebondit.",
        },
        {
          emoji: "🤝",
          title: "Un soutien sans jugement",
          description:
            "Quelqu'un à vos côtés pour garder le cap les jours moins faciles.",
        },
        {
          emoji: "🎯",
          title: "Un plan qui vous ressemble",
          description:
            "Construit autour de votre vie, vos goûts et vos contraintes.",
        },
      ],
    },
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
    page: {
      metaTitle: "Cap retraite 60+ — Maël Gdr, coach sportif à Rennes",
      metaDescription:
        "Activité physique adaptée aux seniors autour de Rennes et Montfort-sur-Meu. Séances en groupe, prévention des chutes, maintien de l'autonomie.",
      headerImage: "/images/cap-retraite.png",
      philosophieTitle: "Vieillir, c'est rester en mouvement",
      philosophieParagraphs: [
        "La retraite n'est pas le moment de ralentir, c'est celui de prendre soin de soi autrement. Bouger régulièrement, c'est préserver son autonomie, son équilibre et sa confiance au quotidien.",
        "Chaque corps a son histoire et ses limites. Mon rôle, c'est de proposer des séances adaptées, sans risque, qui redonnent le goût de l'effort et le plaisir de se sentir capable.",
        "On avance ensemble, à votre rythme, pour gagner des années en bonne santé — et surtout, de la qualité dans ces années.",
      ],
      propositions: [
        "Des séances adaptées à votre condition physique",
        "Des cours en petit groupe, pour le lien social",
        "L'entretien de l'autonomie et de l'équilibre",
        "Un travail de prévention des chutes",
        "Une activité régulière, avec du sens et du plaisir",
      ],
      whyCards: [
        {
          emoji: "🦵",
          title: "Préserver son autonomie",
          description:
            "Rester capable de faire ses gestes du quotidien, longtemps.",
        },
        {
          emoji: "🛡️",
          title: "Éviter les chutes",
          description: "Un travail d'équilibre et de force, en toute sécurité.",
        },
        {
          emoji: "💬",
          title: "Garder du lien",
          description: "Des séances conviviales, pour bouger entouré.",
        },
      ],
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Retrouve un accompagnement par son id, undefined si inexistant */
export function getAccompagnementById(id: string): Accompagnement | undefined {
  return accompagnements.find((a) => a.id === id);
}
