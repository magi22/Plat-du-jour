export type Lang = 'fr' | 'en' | 'de' | 'it';

export interface AppTranslations {
  nav: {
    howItWorks: string;
    features: string;
    restaurants: string;
    pricing: string;
    testimonials: string;
    download: string;
  };
  hero: {
    badge: string;
    h1pre: string;
    h1post: string;
    subtitle: string;
    available: string;
    downloadOn: string;
    availableOn: string;
    popBadge: string;
    fresh: [string, string];
    fast: [string, string];
    reserve: string;
  };
  problem: {
    badge: string;
    h2: string;
    subtitle: string;
    col1: string;
    col2: string;
    tagline: [string, string];
    rows: Array<{ label: string; before: string; after: string }>;
  };
  mascot: {
    badge: string;
    h2: string;
    lead: string;
    subtitle: string;
    cards: Array<{ title: string; desc: string }>;
    cta: string;
    ctaRestaurant: string;
  };
  howItWorks: {
    badge: string;
    h2: string;
    subtitle: string;
    float: [string, string];
    steps: Array<{ title: string; desc: string }>;
  };
  features: {
    h2: string;
    subtitle: string;
    float: [string, string];
    items: Array<{ title: string; desc: string }>;
  };
  showcase: {
    badge: string;
    h2pre: string;
    h2highlight: string;
    subtitle: string;
    featureLabel: string;
    benefits: [string, string, string];
    discover: string;
    features: Array<{
      title: string;
      subtitle: string;
      description: string;
      stats: [{ value: string; label: string }, { value: string; label: string }];
    }>;
  };
  restaurants: {
    badge: string;
    h2: string;
    h2highlight: string;
    subtitle: string;
    cta: string;
    revenue: string;
    thisMonth: string;
    partnership: [string, string];
    steps: Array<{ title: string; desc: string }>;
  };
  pricing: {
    badge: string;
    h2: string;
    h2highlight: string;
    subtitle: string;
    noCommitment: string;
    axisUser: string;
    axisRestaurant: string;
    monthly: string;
    yearly: string;
    security: string;
    plans: {
      user: {
        free: { badge: string; title: string; price: string; features: string[]; cta: string };
        premium: {
          badge: string;
          title: string;
          features: string[];
          pricing: {
            monthly: [string, string];
            yearly: [string, string, string];
          };
          cta: string;
        };
      };
      restaurant: {
        free: { badge: string; title: string; price: string; features: string[]; cta: string };
        premium: {
          badge: string;
          title: string;
          features: string[];
          pricing: {
            monthly: [string, string];
            yearly: [string, string, string];
          };
          cta: string;
        };
        platinum: {
          badge: string;
          title: string;
          features: string[];
          pricing: {
            monthly: [string, string];
            yearly: [string, string, string];
          };
          cta: string;
        };
      };
    };
  };
  testimonials: {
    h2: string;
    subtitle: string;
    prev: string;
    next: string;
    goTo: string;
    stats: Array<{ label: string }>;
  };
  faq: {
    h2: string;
    subtitle: string;
    noAnswer: string;
    contact: string;
    items: Array<{ q: string; a: string }>;
  };
  download: {
    h2: string;
    h2highlight: string;
    subtitle: string;
    downloadOn: string;
    availableOn: string;
    found: string;
    country: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    contactTitle: string;
    contactDesc: string;
    help: string;
    contactSupport: string;
    terms: string;
    privacy: string;
    allRights: string;
    madeBy: string;
    links: { howItWorks: string; testimonials: string; download: string };
  };
}

// ─── FRANÇAIS ───────────────────────────────────────────────────────────────
const fr: AppTranslations = {
  nav: {
    howItWorks: 'Comment ça marche',
    features: 'Fonctionnalités',
    restaurants: 'Restaurants',
    pricing: 'Tarifs',
    testimonials: 'Témoignages',
    download: "Télécharger l'app",
  },
  hero: {
    badge: "Déjà adopté par des milliers d'utilisateurs !",
    h1pre: 'Le',
    h1post: 'juste à côté.',
    subtitle: "Fini l'indécision du midi. Découvrez les menus du jour en temps réel et réservez votre table en un clin d'œil.",
    available: 'Disponible sur iOS & Android',
    downloadOn: 'Télécharger sur',
    availableOn: 'Disponible sur',
    popBadge: '🔥 Populaire',
    fresh: ['Cuisine Fraîche', 'Produits locaux'],
    fast: ['Prêt en 20 min', 'Service rapide'],
    reserve: 'Réserver',
  },
  problem: {
    badge: 'PROBLÈME → SOLUTION',
    h2: 'Vous ne savez jamais quoi manger ?',
    subtitle: 'En quelques secondes, Plat du Jour vous aide à trouver un menu dispo près de vous — sans appels, sans recherches, sans surprise.',
    col1: 'Critère',
    col2: 'Le casse-tête',
    tagline: ['Trouvez. Choisissez. Savourez.', "Passez de l'hésitation à la décision en quelques instants."],
    rows: [
      { label: 'Recherche', before: 'Vous naviguez entre Google, réseaux sociaux et appels.', after: 'Une seule app, tous les menus autour de vous.' },
      { label: 'Temps', before: '10–20 min perdues chaque midi à hésiter.', after: "Choix rapide en moins d'une minute." },
      { label: 'Infos', before: 'Menus incomplets, parfois introuvables en ligne.', after: 'Menus mis à jour en temps réel par les restaurants.' },
      { label: 'Prix', before: 'Vous découvrez le prix une fois sur place.', after: 'Prix affichés avant de vous déplacer.' },
      { label: 'Réservation', before: 'Appels, attente, pas de réponse pendant le rush.', after: 'Réservez ou commandez en quelques clics.' },
      { label: 'Découverte', before: 'Vous retombez souvent sur les mêmes adresses.', after: 'Découvrez de nouveaux restaurants près de vous.' },
    ],
  },
  mascot: {
    badge: 'Votre compagnon repas',
    h2: 'Que vais-je manger ce midi ?',
    lead: 'Mangez mieux, sans chercher.',
    subtitle: "Plat du Jour trouve les meilleurs menus du jour autour de vous. Rapide, local et sans prise de tête.",
    cards: [
      { title: 'Recherche localisée', desc: 'Tous les menus disponibles autour de vous, en temps réel.' },
      { title: 'Choix simplifié', desc: 'Photos, prix et description pour décider en quelques secondes.' },
      { title: 'Réservation rapide', desc: "Réservez votre table directement depuis l'app, en un clic." },
      { title: 'Nouvelles découvertes', desc: 'Explorez de nouveaux restaurants et menus chaque jour.' },
    ],
    cta: "Télécharger l'app",
    ctaRestaurant: 'Je suis restaurateur',
  },
  howItWorks: {
    badge: 'COMMENT ÇA MARCHE',
    h2: 'Comment ça marche ?',
    subtitle: 'Trois étapes pour passer de la recherche au plaisir.',
    float: ['Simple & Rapide', '3 clics suffisent'],
    steps: [
      { title: 'Recherchez autour de vous', desc: "Activez la géolocalisation pour voir instantanément les restaurants avec un plat du jour à proximité." },
      { title: 'Découvrez les menus', desc: "Consultez les photos, descriptions et prix des plats disponibles aujourd'hui." },
      { title: 'Réservez ou commandez', desc: "Réservez votre table ou passez commande directement via l'application." },
    ],
  },
  features: {
    h2: 'Fonctionnalités Clés',
    subtitle: 'Tout ce dont vous avez besoin pour bien manger.',
    float: ['Coup de cœur', 'Sauvegardez vos favoris'],
    items: [
      { title: 'Recherche Localisée', desc: 'Trouvez les plats disponibles dans un rayon précis autour de vous.' },
      { title: 'Réservation en ligne', desc: "Réservez votre table directement depuis l'application." },
      { title: 'Favoris & Avis', desc: 'Sauvegardez vos restaurants préférés et notez les plats dégustés.' },
      { title: 'Notifications', desc: 'Soyez alerté dès que votre restaurant favori publie son menu.' },
    ],
  },
  showcase: {
    badge: 'Fonctionnalités',
    h2pre: "Tout ce qu'il faut pour",
    h2highlight: 'découvrir, choisir, profiter',
    subtitle: 'Une expérience simple côté utilisateur, et des outils efficaces côté restaurant.',
    featureLabel: 'Fonctionnalité',
    benefits: ["Interface claire et rapide", "Expérience cohérente iOS & Android", "Pensé pour l'utilisateur et le restaurant"],
    discover: "Découvrir l'app",
    features: [
      { title: "Découvrir le plat du jour", subtitle: "Accueil & suggestions autour de vous", description: "Accédez rapidement aux plats disponibles, repérez les bonnes adresses et explorez les menus du jour sans perdre de temps.", stats: [{ value: "Rapide", label: "Découverte" }, { value: "Local", label: "Autour de vous" }] },
      { title: "Espace restaurant", subtitle: "Dashboard & performance", description: "Un tableau de bord simple pour suivre vos performances, gérer vos contenus et gagner du temps au quotidien.", stats: [{ value: "Stats", label: "Claires" }, { value: "Gestion", label: "Centralisée" }] },
      { title: "Onboarding fluide", subtitle: "Présentation en quelques écrans", description: "Une prise en main rapide : l'utilisateur comprend l'app en quelques secondes et passe à l'action immédiatement.", stats: [{ value: "< 1 min", label: "Compréhension" }, { value: "Simple", label: "Expérience" }] },
      { title: "Recherche & filtres", subtitle: "Trouver vite, choisir mieux", description: "Recherchez un restaurant, un plat ou une catégorie. Filtrez pour trouver exactement ce que vous voulez, au bon moment.", stats: [{ value: "Smart", label: "Recherche" }, { value: "Pertinent", label: "Résultats" }] },
      { title: "Parrainage & récompenses", subtitle: "Invitez, cumulez, profitez", description: "Partagez votre lien et progressez vers des récompenses. Un système simple qui motive et fidélise.", stats: [{ value: "Bonus", label: "Récompenses" }, { value: "Fun", label: "Challenge" }] },
      { title: "Carte & ID Premium", subtitle: "Accès & avantages en un scan", description: "Une carte premium claire avec QR Code et informations utiles, pour profiter d'avantages et d'offres exclusives.", stats: [{ value: "QR", label: "Scan rapide" }, { value: "Premium", label: "Avantages" }] },
      { title: "Restaurants & menus", subtitle: "Vue riche, infos utiles", description: "Photos, menus, badges premium/cadeau, et infos clés : tout est présenté pour vous aider à décider rapidement.", stats: [{ value: "Menus", label: "À jour" }, { value: "Infos", label: "Claires" }] },
      { title: "Réservation", subtitle: "Passez à l'action", description: "Réservez facilement, sans friction. Une action simple et rapide pour transformer la découverte en visite.", stats: [{ value: "1 clic", label: "Réserver" }, { value: "Direct", label: "Action" }] },
    ],
  },
  restaurants: {
    badge: 'Espace Restaurateurs',
    h2: 'Devenons partenaires de votre',
    h2highlight: 'succès',
    subtitle: 'Ne laissez plus vos tables vides. Notre plateforme connecte votre savoir-faire culinaire à une communauté locale affamée et fidèle.',
    cta: 'Devenir partenaire',
    revenue: 'REVENUS',
    thisMonth: 'ce mois-ci',
    partnership: ['Partenariat Gagnant', 'Rejoignez +200 restaurateurs heureux'],
    steps: [
      { title: 'Créez votre profil', desc: 'Mettez en valeur votre établissement avec de belles photos.' },
      { title: 'Publiez en un clic', desc: 'Une interface simplifiée pour ajouter votre menu du jour en 30 secondes.' },
      { title: 'Développez votre clientèle', desc: 'Attirez les travailleurs et résidents locaux automatiquement.' },
    ],
  },
  pricing: {
    badge: 'Fonctionnalités & Tarifs',
    h2: 'Choisissez la formule',
    h2highlight: 'adaptée',
    subtitle: 'Une offre simple côté utilisateur, et des outils puissants côté restaurant.',
    noCommitment: 'Sans engagement • Annulez quand vous voulez',
    axisUser: 'Utilisateur',
    axisRestaurant: 'Restaurant',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    security: 'Paiement sécurisé • Support réactif • Résiliation en 1 clic',
    plans: {
      user: {
        free: {
          badge: 'Gratuit',
          title: 'Classique',
          price: '0 CHF / mois',
          features: ['Accès menus & profils', 'Recherche & géo', '3 menus / jour', '1 image / plat', '10 photos profil'],
          cta: 'Commencer gratuitement',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium',
          features: ['Accès menus & profils', 'Recherche & géo', '3 menus / jour', '1 image / plat', '10 photos profil', 'Illimités — sans pub', 'Favoris & avis avancés', 'Notifications personnalisées'],
          pricing: {
            monthly: ['4.90 CHF', '/mois'],
            yearly: ['49.- CHF', '/an', 'Économisez 2 mois'],
          },
          cta: 'Passer en Premium',
        },
      },
      restaurant: {
        free: {
          badge: 'Standard',
          title: 'Classique',
          price: '0 CHF / mois',
          features: ['3 menus / jour', '1 image / plat', '10 photos profil'],
          cta: 'Commencer gratuitement',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium / Itinérant',
          features: ['3 menus / jour', '1 image / plat', '10 photos profil', '5 menus / jour', '3 images / plat', 'Cadeaux promotionnels', 'Profil mis en avant', 'Gestion emplacements itinérants'],
          pricing: {
            monthly: ['29 CHF', '/mois'],
            yearly: ['290 CHF', '/an', 'Économisez 2 mois'],
          },
          cta: 'Choisir ce forfait',
        },
        platinum: {
          badge: 'Platinum',
          title: 'Platinum / Itinérant Multi',
          features: ['3 menus / jour', '1 image / plat', '10 photos profil', '5 menus / jour', '3 images / plat', 'Cadeaux promotionnels', 'Profil mis en avant', 'Gestion emplacements itinérants', "Jusqu'à 5 établissements", '+5 CHF / unité supplémentaire'],
          pricing: {
            monthly: ['59 CHF', '/mois'],
            yearly: ['590 CHF', '/an', 'Économisez 2 mois'],
          },
          cta: 'Choisir Platinum',
        },
      },
    },
  },
  testimonials: {
    h2: 'La communauté adore',
    subtitle: "Des milliers d'utilisateurs et restaurateurs satisfaits",
    prev: 'Précédent',
    next: 'Suivant',
    goTo: 'Aller au témoignage',
    stats: [
      { label: 'Téléchargements' },
      { label: 'Restaurants' },
      { label: 'Menus servis' },
      { label: 'Note moyenne' },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur Plat du Jour',
    noAnswer: 'Vous ne trouvez pas la réponse à votre question ?',
    contact: 'Contactez notre support',
    items: [
      { q: "L'application est-elle gratuite ?", a: "Oui, l'application de base est 100% gratuite pour les utilisateurs. Vous pouvez consulter les menus, lire les avis et rechercher des restaurants sans aucun frais. Un abonnement Premium offre des fonctionnalités avancées." },
      { q: 'Où est disponible Plat du Jour ?', a: 'Nous sommes disponibles dans plusieurs villes et en pleine expansion. De nouvelles zones sont ajoutées régulièrement en fonction des restaurants partenaires.' },
      { q: 'Comment les restaurants publient-ils leurs menus ?', a: "Les restaurants publient via un espace dédié : photo + description + prix, en quelques secondes. Le menu est ensuite visible instantanément dans l'app." },
      { q: 'Puis-je réserver une table ?', a: "Oui, si le restaurant partenaire a activé les réservations. Vous recevez une confirmation immédiate. Les utilisateurs Premium peuvent bénéficier d'avantages selon les restaurants." },
      { q: 'Dois-je créer un compte ?', a: "Non pour consulter. Un compte (gratuit) est nécessaire pour réserver, mettre en favoris ou laisser un avis. L'inscription est rapide." },
      { q: 'Comment sont vérifiés les plats du jour ?', a: 'Les plats sont publiés directement par les restaurants. Notre système détecte les menus obsolètes et relance automatiquement les mises à jour.' },
      { q: 'Puis-je filtrer selon mes préférences alimentaires ?', a: 'Oui : cuisine, budget, distance, et préférences alimentaires (végétarien, végan, halal, sans gluten, etc.). Les filtres Premium peuvent aller plus loin.' },
      { q: 'Comment devenir restaurant partenaire ?', a: "Dans la section Restaurants, remplissez le formulaire. L'équipe vous recontacte pour activer votre profil et vous accompagner dans la mise en ligne." },
      { q: "L'app fonctionne-t-elle hors connexion ?", a: 'Le mode gratuit nécessite internet. Le Premium peut proposer un mode hors-ligne (favoris + derniers menus consultés) selon les options activées.' },
      { q: 'Comment signaler un problème ?', a: 'Vous pouvez signaler depuis une fiche restaurant ou nous contacter via le support. On répond rapidement, et le Premium peut avoir un support prioritaire.' },
    ],
  },
  download: {
    h2: 'Toute la ville',
    h2highlight: 'dans votre poche.',
    subtitle: "De Berne à Zurich, trouvez les pépites culinaires autour de vous. Téléchargez Plat du Jour et commencez l'exploration.",
    downloadOn: 'Télécharger sur',
    availableOn: 'Disponible sur',
    found: '10 restaurants trouvés',
    country: 'Suisse',
  },
  footer: {
    tagline: 'La meilleure façon de découvrir les menus du jour autour de vous. Simple, rapide et gourmand.',
    quickLinks: 'Liens Rapides',
    legal: 'Légal',
    contactTitle: 'Contactez-nous',
    contactDesc: 'Une question ? Écrivez-nous.',
    help: "Besoin d'aide ?",
    contactSupport: 'Contactez le support',
    terms: 'CGU',
    privacy: 'Politique de confidentialité',
    allRights: 'Tous droits réservés.',
    madeBy: 'Fait par',
    links: { howItWorks: 'Comment ça marche', testimonials: 'Témoignages', download: "Télécharger l'app" },
  },
};

// ─── ENGLISH ─────────────────────────────────────────────────────────────────
const en: AppTranslations = {
  nav: {
    howItWorks: 'How It Works',
    features: 'Features',
    restaurants: 'Restaurants',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    download: 'Download the app',
  },
  hero: {
    badge: 'Already loved by thousands of users!',
    h1pre: 'The',
    h1post: 'right around the corner.',
    subtitle: "No more lunchtime indecision. Discover today's menus in real time and book your table in a flash.",
    available: 'Available on iOS & Android',
    downloadOn: 'Download on',
    availableOn: 'Get it on',
    popBadge: '🔥 Popular',
    fresh: ['Fresh Cuisine', 'Local produce'],
    fast: ['Ready in 20 min', 'Fast service'],
    reserve: 'Book',
  },
  problem: {
    badge: 'PROBLEM → SOLUTION',
    h2: "Don't know what to eat?",
    subtitle: 'In seconds, Plat du Jour helps you find an available menu near you — no calls, no searching, no surprises.',
    col1: 'Topic',
    col2: 'The headache',
    tagline: ['Find it. Choose it. Enjoy it.', 'Go from hesitation to decision in moments.'],
    rows: [
      { label: 'Search', before: 'You browse Google, social media and make calls.', after: 'One app, all menus around you.' },
      { label: 'Time', before: '10–20 min wasted every lunch deciding.', after: 'Quick choice in under a minute.' },
      { label: 'Info', before: 'Incomplete menus, sometimes impossible to find.', after: 'Menus updated in real time by restaurants.' },
      { label: 'Price', before: 'You find out the price only when you arrive.', after: 'Prices shown before you leave.' },
      { label: 'Booking', before: 'Calls, hold, no answer during the rush.', after: 'Reserve or order in a few clicks.' },
      { label: 'Discovery', before: 'You keep going back to the same places.', after: 'Discover new restaurants near you.' },
    ],
  },
  mascot: {
    badge: 'Your meal companion',
    h2: 'What will I eat for lunch?',
    lead: 'Eat better, without searching.',
    subtitle: "Plat du Jour finds the best daily specials around you. Fast, local and hassle-free.",
    cards: [
      { title: 'Local search', desc: 'All available menus around you, in real time.' },
      { title: 'Easy choice', desc: 'Photos, prices and descriptions to decide in seconds.' },
      { title: 'Quick booking', desc: 'Book your table directly from the app, in one tap.' },
      { title: 'New discoveries', desc: 'Explore new restaurants and menus every day.' },
    ],
    cta: 'Download the app',
    ctaRestaurant: "I'm a restaurant owner",
  },
  howItWorks: {
    badge: 'HOW IT WORKS',
    h2: 'How does it work?',
    subtitle: 'Three steps from searching to savoring.',
    float: ['Simple & Fast', '3 clicks is all it takes'],
    steps: [
      { title: 'Search around you', desc: 'Enable location to instantly see restaurants with a daily special nearby.' },
      { title: 'Explore the menus', desc: "Browse photos, descriptions and prices of today's available dishes." },
      { title: 'Book or order', desc: 'Reserve your table or place an order directly through the app.' },
    ],
  },
  features: {
    h2: 'Key Features',
    subtitle: 'Everything you need to eat well.',
    float: ['Favourite', 'Save your favourites'],
    items: [
      { title: 'Local Search', desc: 'Find available dishes within a precise radius around you.' },
      { title: 'Online Booking', desc: 'Book your table directly from the app.' },
      { title: 'Favourites & Reviews', desc: 'Save your favourite restaurants and rate dishes you have tried.' },
      { title: 'Notifications', desc: "Get alerted as soon as your favourite restaurant posts today's menu." },
    ],
  },
  showcase: {
    badge: 'Features',
    h2pre: 'Everything you need to',
    h2highlight: 'discover, choose, enjoy',
    subtitle: 'A simple experience for users, and powerful tools for restaurants.',
    featureLabel: 'Feature',
    benefits: ['Clean and fast interface', 'Consistent iOS & Android experience', 'Designed for users and restaurants'],
    discover: 'Explore the app',
    features: [
      { title: "Discover today's special", subtitle: "Home & suggestions near you", description: "Quickly access available dishes, spot the best spots and browse today's menus without wasting time.", stats: [{ value: "Fast", label: "Discovery" }, { value: "Local", label: "Near you" }] },
      { title: "Restaurant space", subtitle: "Dashboard & performance", description: "A simple dashboard to track your performance, manage your content and save time every day.", stats: [{ value: "Stats", label: "Clear" }, { value: "Manage", label: "Centralised" }] },
      { title: "Smooth onboarding", subtitle: "Introduction in a few screens", description: "Quick to get started: users understand the app in seconds and take action immediately.", stats: [{ value: "< 1 min", label: "To understand" }, { value: "Simple", label: "Experience" }] },
      { title: "Search & filters", subtitle: "Find fast, choose better", description: "Search a restaurant, dish or category. Filter to find exactly what you want, at the right time.", stats: [{ value: "Smart", label: "Search" }, { value: "Relevant", label: "Results" }] },
      { title: "Referral & rewards", subtitle: "Invite, earn, enjoy", description: "Share your link and progress towards rewards. A simple system that motivates and builds loyalty.", stats: [{ value: "Bonus", label: "Rewards" }, { value: "Fun", label: "Challenge" }] },
      { title: "Premium card & ID", subtitle: "Access & perks in one scan", description: "A clear premium card with QR Code and useful information, to enjoy exclusive offers and benefits.", stats: [{ value: "QR", label: "Quick scan" }, { value: "Premium", label: "Perks" }] },
      { title: "Restaurants & menus", subtitle: "Rich view, useful info", description: "Photos, menus, premium/gift badges and key info: everything is presented to help you decide fast.", stats: [{ value: "Menus", label: "Up to date" }, { value: "Info", label: "Clear" }] },
      { title: "Booking", subtitle: "Take action", description: "Book easily, without friction. A simple and fast action to turn discovery into a visit.", stats: [{ value: "1 click", label: "Book" }, { value: "Direct", label: "Action" }] },
    ],
  },
  restaurants: {
    badge: 'For Restaurant Owners',
    h2: "Let's become partners in your",
    h2highlight: 'success',
    subtitle: "Don't leave your tables empty. Our platform connects your culinary expertise to a hungry and loyal local community.",
    cta: 'Become a partner',
    revenue: 'REVENUE',
    thisMonth: 'this month',
    partnership: ['Winning Partnership', 'Join 200+ happy restaurant owners'],
    steps: [
      { title: 'Create your profile', desc: 'Showcase your establishment with beautiful photos.' },
      { title: 'Publish in one click', desc: "A simplified interface to add your daily special in 30 seconds." },
      { title: 'Grow your clientele', desc: 'Attract local workers and residents automatically.' },
    ],
  },
  pricing: {
    badge: 'Features & Pricing',
    h2: 'Choose the plan',
    h2highlight: 'that suits you',
    subtitle: 'A simple offer for users, and powerful tools for restaurants.',
    noCommitment: 'No commitment • Cancel anytime',
    axisUser: 'User',
    axisRestaurant: 'Restaurant',
    monthly: 'Monthly',
    yearly: 'Yearly',
    security: 'Secure payment • Responsive support • Cancel in 1 click',
    plans: {
      user: {
        free: {
          badge: 'Free',
          title: 'Classic',
          price: 'CHF 0 / month',
          features: ['Menu & profile access', 'Search & geolocation', '3 menus / day', '1 image / dish', '10 profile photos'],
          cta: 'Start for free',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium',
          features: ['Menu & profile access', 'Search & geolocation', '3 menus / day', '1 image / dish', '10 profile photos', 'Unlimited — ad-free', 'Favourites & advanced reviews', 'Personalised notifications'],
          pricing: {
            monthly: ['CHF 4.90', '/month'],
            yearly: ['CHF 49.-', '/year', 'Save 2 months'],
          },
          cta: 'Go Premium',
        },
      },
      restaurant: {
        free: {
          badge: 'Standard',
          title: 'Classic',
          price: 'CHF 0 / month',
          features: ['3 menus / day', '1 image / dish', '10 profile photos'],
          cta: 'Start for free',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium / Mobile',
          features: ['3 menus / day', '1 image / dish', '10 profile photos', '5 menus / day', '3 images / dish', 'Promotional gifts', 'Featured profile', 'Mobile location management'],
          pricing: {
            monthly: ['CHF 29', '/month'],
            yearly: ['CHF 290', '/year', 'Save 2 months'],
          },
          cta: 'Choose this plan',
        },
        platinum: {
          badge: 'Platinum',
          title: 'Platinum / Multi-Location',
          features: ['3 menus / day', '1 image / dish', '10 profile photos', '5 menus / day', '3 images / dish', 'Promotional gifts', 'Featured profile', 'Mobile location management', 'Up to 5 establishments', '+CHF 5 / additional unit'],
          pricing: {
            monthly: ['CHF 59', '/month'],
            yearly: ['CHF 590', '/year', 'Save 2 months'],
          },
          cta: 'Choose Platinum',
        },
      },
    },
  },
  testimonials: {
    h2: 'The community loves it',
    subtitle: 'Thousands of satisfied users and restaurant owners',
    prev: 'Previous',
    next: 'Next',
    goTo: 'Go to testimonial',
    stats: [
      { label: 'Downloads' },
      { label: 'Restaurants' },
      { label: 'Menus served' },
      { label: 'Average rating' },
    ],
  },
  faq: {
    h2: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about Plat du Jour',
    noAnswer: "Can't find the answer to your question?",
    contact: 'Contact our support',
    items: [
      { q: 'Is the app free?', a: 'Yes, the basic app is 100% free for users. You can browse menus, read reviews and search for restaurants at no cost. A Premium subscription offers advanced features.' },
      { q: 'Where is Plat du Jour available?', a: 'We are available in several cities and expanding. New areas are added regularly as partner restaurants join.' },
      { q: 'How do restaurants publish their menus?', a: 'Restaurants publish via a dedicated space: photo + description + price, in seconds. The menu is then instantly visible in the app.' },
      { q: 'Can I book a table?', a: 'Yes, if the partner restaurant has enabled bookings. You receive immediate confirmation. Premium users may benefit from perks depending on the restaurant.' },
      { q: 'Do I need to create an account?', a: 'Not to browse. A (free) account is needed to book, save favourites or leave a review. Registration is quick.' },
      { q: 'How are daily specials verified?', a: 'Dishes are published directly by restaurants. Our system detects outdated menus and automatically prompts updates.' },
      { q: 'Can I filter by dietary preferences?', a: 'Yes: cuisine type, budget, distance, and dietary preferences (vegetarian, vegan, halal, gluten-free, etc.). Premium filters can go further.' },
      { q: 'How do I become a partner restaurant?', a: 'In the Restaurants section, fill in the form. The team will contact you to activate your profile and help you get online.' },
      { q: 'Does the app work offline?', a: 'The free mode requires internet. Premium can offer an offline mode (favourites + last viewed menus) depending on options enabled.' },
      { q: 'How do I report a problem?', a: 'You can report from a restaurant listing or contact us via support. We respond quickly, and Premium users may have priority support.' },
    ],
  },
  download: {
    h2: 'The whole city',
    h2highlight: 'in your pocket.',
    subtitle: 'From Bern to Zurich, discover culinary gems around you. Download Plat du Jour and start exploring.',
    downloadOn: 'Download on',
    availableOn: 'Get it on',
    found: '10 restaurants found',
    country: 'Switzerland',
  },
  footer: {
    tagline: 'The best way to discover daily menus around you. Simple, fast and delicious.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    contactTitle: 'Contact Us',
    contactDesc: 'Have a question? Write to us.',
    help: 'Need help?',
    contactSupport: 'Contact support',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    allRights: 'All rights reserved.',
    madeBy: 'Made by',
    links: { howItWorks: 'How It Works', testimonials: 'Testimonials', download: 'Download the app' },
  },
};

// ─── DEUTSCH ─────────────────────────────────────────────────────────────────
const de: AppTranslations = {
  nav: {
    howItWorks: 'So funktioniert es',
    features: 'Funktionen',
    restaurants: 'Restaurants',
    pricing: 'Preise',
    testimonials: 'Bewertungen',
    download: 'App herunterladen',
  },
  hero: {
    badge: 'Bereits von Tausenden genutzt!',
    h1pre: 'Das',
    h1post: 'gleich um die Ecke.',
    subtitle: 'Kein Mittagsstress mehr. Entdecke die Tagesmenüs in Echtzeit und reserviere deinen Tisch im Handumdrehen.',
    available: 'Verfügbar für iOS & Android',
    downloadOn: 'Laden bei',
    availableOn: 'Jetzt bei',
    popBadge: '🔥 Beliebt',
    fresh: ['Frische Küche', 'Lokale Produkte'],
    fast: ['In 20 Min bereit', 'Schneller Service'],
    reserve: 'Reservieren',
  },
  problem: {
    badge: 'PROBLEM → LÖSUNG',
    h2: 'Weißt du nie, was du essen sollst?',
    subtitle: 'In Sekunden hilft dir Plat du Jour, ein verfügbares Menü in deiner Nähe zu finden — ohne Anrufe, ohne Suchen, ohne Überraschungen.',
    col1: 'Thema',
    col2: 'Das Problem',
    tagline: ['Finden. Wählen. Genießen.', 'Von der Unentschlossenheit zur Entscheidung in Momenten.'],
    rows: [
      { label: 'Suche', before: 'Du durchsuchst Google, Social Media und rufst an.', after: 'Eine App, alle Menüs in deiner Nähe.' },
      { label: 'Zeit', before: '10–20 Min täglich beim Mittagessen verloren.', after: 'Schnelle Wahl in unter einer Minute.' },
      { label: 'Infos', before: 'Unvollständige Menüs, manchmal gar nicht online.', after: 'Menüs in Echtzeit von Restaurants aktualisiert.' },
      { label: 'Preis', before: 'Den Preis erfährst du erst vor Ort.', after: 'Preise angezeigt, bevor du losgehst.' },
      { label: 'Reservierung', before: 'Anrufe, Warten, keine Antwort im Trubel.', after: 'In wenigen Klicks reservieren oder bestellen.' },
      { label: 'Entdeckung', before: 'Du gehst immer wieder zu denselben Adressen.', after: 'Entdecke neue Restaurants in deiner Nähe.' },
    ],
  },
  mascot: {
    badge: 'Dein Essensbegleiter',
    h2: 'Was esse ich heute Mittag?',
    lead: 'Besser essen, ohne zu suchen.',
    subtitle: "Plat du Jour findet die besten Tagesmenüs in deiner Nähe. Schnell, lokal und unkompliziert.",
    cards: [
      { title: 'Lokale Suche', desc: 'Alle verfügbaren Menüs in deiner Nähe, in Echtzeit.' },
      { title: 'Einfache Wahl', desc: 'Fotos, Preise und Beschreibung, um in Sekunden zu entscheiden.' },
      { title: 'Schnelle Reservierung', desc: 'Reserviere deinen Tisch direkt in der App, mit einem Klick.' },
      { title: 'Neue Entdeckungen', desc: 'Entdecke jeden Tag neue Restaurants und Menüs.' },
    ],
    cta: 'App herunterladen',
    ctaRestaurant: 'Ich bin Restaurantbetreiber',
  },
  howItWorks: {
    badge: 'SO FUNKTIONIERT ES',
    h2: 'Wie funktioniert es?',
    subtitle: 'Drei Schritte von der Suche zum Genuss.',
    float: ['Einfach & Schnell', '3 Klicks reichen'],
    steps: [
      { title: 'In deiner Umgebung suchen', desc: 'Aktiviere den Standort, um sofort Restaurants mit Tagesmenü in der Nähe zu sehen.' },
      { title: 'Menüs entdecken', desc: 'Fotos, Beschreibungen und Preise der heute verfügbaren Gerichte ansehen.' },
      { title: 'Reservieren oder bestellen', desc: 'Reserviere deinen Tisch oder bestelle direkt über die App.' },
    ],
  },
  features: {
    h2: 'Hauptfunktionen',
    subtitle: 'Alles, was du brauchst, um gut zu essen.',
    float: ['Favorit', 'Speichere deine Lieblinge'],
    items: [
      { title: 'Lokale Suche', desc: 'Finde verfügbare Gerichte in einem genauen Radius um dich herum.' },
      { title: 'Online-Reservierung', desc: 'Reserviere deinen Tisch direkt aus der App.' },
      { title: 'Favoriten & Bewertungen', desc: 'Speichere deine Lieblingsrestaurants und bewerte gekostete Gerichte.' },
      { title: 'Benachrichtigungen', desc: 'Werde sofort benachrichtigt, wenn dein Lieblingsrestaurant sein Menü veröffentlicht.' },
    ],
  },
  showcase: {
    badge: 'Funktionen',
    h2pre: 'Alles, was du brauchst zum',
    h2highlight: 'Entdecken, Wählen, Genießen',
    subtitle: 'Ein einfaches Erlebnis für Nutzer und leistungsstarke Werkzeuge für Restaurants.',
    featureLabel: 'Funktion',
    benefits: ['Klare und schnelle Oberfläche', 'Einheitliches iOS & Android Erlebnis', 'Für Nutzer und Restaurants gedacht'],
    discover: 'App entdecken',
    features: [
      { title: "Tagesmenü entdecken", subtitle: "Startseite & Vorschläge in deiner Nähe", description: "Schnell auf verfügbare Gerichte zugreifen, die besten Adressen finden und Tagesmenüs ohne Zeitverlust durchstöbern.", stats: [{ value: "Schnell", label: "Entdeckung" }, { value: "Lokal", label: "In der Nähe" }] },
      { title: "Restaurant-Bereich", subtitle: "Dashboard & Performance", description: "Ein einfaches Dashboard, um deine Leistung zu verfolgen, Inhalte zu verwalten und täglich Zeit zu sparen.", stats: [{ value: "Stats", label: "Klar" }, { value: "Verwaltung", label: "Zentral" }] },
      { title: "Flüssiges Onboarding", subtitle: "Einführung in wenigen Screens", description: "Schneller Einstieg: Nutzer verstehen die App in Sekunden und handeln sofort.", stats: [{ value: "< 1 Min", label: "Verstehen" }, { value: "Einfach", label: "Erlebnis" }] },
      { title: "Suche & Filter", subtitle: "Schnell finden, besser wählen", description: "Suche ein Restaurant, ein Gericht oder eine Kategorie. Filtere, um genau das zu finden, was du willst.", stats: [{ value: "Smart", label: "Suche" }, { value: "Relevant", label: "Ergebnisse" }] },
      { title: "Empfehlung & Belohnungen", subtitle: "Einladen, sammeln, genießen", description: "Teile deinen Link und schreite Richtung Belohnungen voran. Ein einfaches System, das motiviert und bindet.", stats: [{ value: "Bonus", label: "Belohnungen" }, { value: "Spaß", label: "Challenge" }] },
      { title: "Premium-Karte & ID", subtitle: "Zugang & Vorteile per Scan", description: "Eine klare Premium-Karte mit QR-Code und nützlichen Informationen, um exklusive Angebote zu genießen.", stats: [{ value: "QR", label: "Schnell-Scan" }, { value: "Premium", label: "Vorteile" }] },
      { title: "Restaurants & Menüs", subtitle: "Reiche Ansicht, nützliche Infos", description: "Fotos, Menüs, Premium/Geschenk-Badges und wichtige Infos: alles präsentiert, damit du schnell entscheidest.", stats: [{ value: "Menüs", label: "Aktuell" }, { value: "Infos", label: "Klar" }] },
      { title: "Reservierung", subtitle: "Jetzt handeln", description: "Einfach reservieren, ohne Hürden. Eine schnelle Aktion, die Entdeckung in einen Besuch verwandelt.", stats: [{ value: "1 Klick", label: "Reservieren" }, { value: "Direkt", label: "Aktion" }] },
    ],
  },
  restaurants: {
    badge: 'Für Restaurantbesitzer',
    h2: 'Werden wir Partner für Ihren',
    h2highlight: 'Erfolg',
    subtitle: 'Lassen Sie Ihre Tische nicht leer stehen. Unsere Plattform verbindet Ihr kulinarisches Know-how mit einer hungrigen und treuen lokalen Gemeinschaft.',
    cta: 'Partner werden',
    revenue: 'UMSATZ',
    thisMonth: 'diesen Monat',
    partnership: ['Gewinnende Partnerschaft', 'Schließen Sie sich 200+ glücklichen Restaurantbesitzern an'],
    steps: [
      { title: 'Profil erstellen', desc: 'Präsentieren Sie Ihr Lokal mit schönen Fotos.' },
      { title: 'Mit einem Klick veröffentlichen', desc: 'Eine vereinfachte Oberfläche, um Ihr Tagesmenü in 30 Sekunden hinzuzufügen.' },
      { title: 'Kundenstamm erweitern', desc: 'Gewinnen Sie automatisch lokale Arbeitnehmer und Anwohner als Kunden.' },
    ],
  },
  pricing: {
    badge: 'Funktionen & Preise',
    h2: 'Wählen Sie das Paket,',
    h2highlight: 'das zu Ihnen passt',
    subtitle: 'Ein einfaches Angebot für Nutzer und leistungsstarke Werkzeuge für Restaurants.',
    noCommitment: 'Keine Bindung • Jederzeit kündbar',
    axisUser: 'Nutzer',
    axisRestaurant: 'Restaurant',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    security: 'Sichere Zahlung • Reaktiver Support • Kündigung per Klick',
    plans: {
      user: {
        free: {
          badge: 'Kostenlos',
          title: 'Klassisch',
          price: '0 CHF / Monat',
          features: ['Menü- & Profilzugang', 'Suche & Geolokalisierung', '3 Menüs / Tag', '1 Bild / Gericht', '10 Profilfotos'],
          cta: 'Kostenlos starten',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium',
          features: ['Menü- & Profilzugang', 'Suche & Geolokalisierung', '3 Menüs / Tag', '1 Bild / Gericht', '10 Profilfotos', 'Unbegrenzt — werbefrei', 'Favoriten & erweiterte Bewertungen', 'Personalisierte Benachrichtigungen'],
          pricing: {
            monthly: ['4.90 CHF', '/Monat'],
            yearly: ['49.- CHF', '/Jahr', '2 Monate sparen'],
          },
          cta: 'Premium werden',
        },
      },
      restaurant: {
        free: {
          badge: 'Standard',
          title: 'Klassisch',
          price: '0 CHF / Monat',
          features: ['3 Menüs / Tag', '1 Bild / Gericht', '10 Profilfotos'],
          cta: 'Kostenlos starten',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium / Mobil',
          features: ['3 Menüs / Tag', '1 Bild / Gericht', '10 Profilfotos', '5 Menüs / Tag', '3 Bilder / Gericht', 'Werbungsgeschenke', 'Hervorgehobenes Profil', 'Verwaltung mobiler Standorte'],
          pricing: {
            monthly: ['29 CHF', '/Monat'],
            yearly: ['290 CHF', '/Jahr', '2 Monate sparen'],
          },
          cta: 'Dieses Paket wählen',
        },
        platinum: {
          badge: 'Platinum',
          title: 'Platinum / Multi-Standort',
          features: ['3 Menüs / Tag', '1 Bild / Gericht', '10 Profilfotos', '5 Menüs / Tag', '3 Bilder / Gericht', 'Werbungsgeschenke', 'Hervorgehobenes Profil', 'Verwaltung mobiler Standorte', 'Bis zu 5 Betriebe', '+5 CHF / zusätzliche Einheit'],
          pricing: {
            monthly: ['59 CHF', '/Monat'],
            yearly: ['590 CHF', '/Jahr', '2 Monate sparen'],
          },
          cta: 'Platinum wählen',
        },
      },
    },
  },
  testimonials: {
    h2: 'Die Community liebt es',
    subtitle: 'Tausende zufriedene Nutzer und Restaurantbesitzer',
    prev: 'Zurück',
    next: 'Weiter',
    goTo: 'Zum Erfahrungsbericht',
    stats: [
      { label: 'Downloads' },
      { label: 'Restaurants' },
      { label: 'Servierte Menüs' },
      { label: 'Durchschnittsbewertung' },
    ],
  },
  faq: {
    h2: 'Häufige Fragen',
    subtitle: 'Alles, was Sie über Plat du Jour wissen müssen',
    noAnswer: 'Keine Antwort auf Ihre Frage gefunden?',
    contact: 'Support kontaktieren',
    items: [
      { q: 'Ist die App kostenlos?', a: 'Ja, die Basis-App ist 100% kostenlos für Nutzer. Sie können Menüs durchsuchen, Bewertungen lesen und Restaurants suchen. Ein Premium-Abonnement bietet erweiterte Funktionen.' },
      { q: 'Wo ist Plat du Jour verfügbar?', a: 'Wir sind in mehreren Städten verfügbar und expandieren. Neue Bereiche werden regelmäßig hinzugefügt, sobald Partnerrestaurants beitreten.' },
      { q: 'Wie veröffentlichen Restaurants ihre Menüs?', a: 'Restaurants veröffentlichen über einen dedizierten Bereich: Foto + Beschreibung + Preis, in Sekunden. Das Menü ist dann sofort in der App sichtbar.' },
      { q: 'Kann ich einen Tisch reservieren?', a: 'Ja, wenn das Partnerrestaurant Reservierungen aktiviert hat. Sie erhalten eine sofortige Bestätigung.' },
      { q: 'Muss ich ein Konto erstellen?', a: 'Nein, um zu stöbern. Ein (kostenloses) Konto ist nötig, um zu reservieren, Favoriten zu setzen oder eine Bewertung zu hinterlassen.' },
      { q: 'Wie werden Tagesgerichte verifiziert?', a: 'Gerichte werden direkt von Restaurants veröffentlicht. Unser System erkennt veraltete Menüs und fordert automatisch Updates an.' },
      { q: 'Kann ich nach Ernährungspräferenzen filtern?', a: 'Ja: Küche, Budget, Entfernung und Ernährungspräferenzen (vegetarisch, vegan, halal, glutenfrei, usw.).' },
      { q: 'Wie werde ich Partnerrestaurant?', a: 'Im Bereich Restaurants das Formular ausfüllen. Das Team kontaktiert Sie, um Ihr Profil zu aktivieren.' },
      { q: 'Funktioniert die App offline?', a: 'Der kostenlose Modus benötigt Internet. Premium kann einen Offline-Modus anbieten (Favoriten + zuletzt angesehene Menüs).' },
      { q: 'Wie melde ich ein Problem?', a: 'Sie können von einem Restauranteintrag aus melden oder uns über den Support kontaktieren.' },
    ],
  },
  download: {
    h2: 'Die ganze Stadt',
    h2highlight: 'in Ihrer Tasche.',
    subtitle: 'Von Bern bis Zürich, entdecken Sie kulinarische Highlights in Ihrer Nähe. Laden Sie Plat du Jour herunter und beginnen Sie die Entdeckungstour.',
    downloadOn: 'Laden bei',
    availableOn: 'Jetzt bei',
    found: '10 Restaurants gefunden',
    country: 'Schweiz',
  },
  footer: {
    tagline: 'Der beste Weg, Tagesmenüs in Ihrer Nähe zu entdecken. Einfach, schnell und lecker.',
    quickLinks: 'Schnelllinks',
    legal: 'Rechtliches',
    contactTitle: 'Kontakt',
    contactDesc: 'Eine Frage? Schreiben Sie uns.',
    help: 'Hilfe benötigt?',
    contactSupport: 'Support kontaktieren',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzerklärung',
    allRights: 'Alle Rechte vorbehalten.',
    madeBy: 'Gemacht von',
    links: { howItWorks: 'So funktioniert es', testimonials: 'Bewertungen', download: 'App herunterladen' },
  },
};

// ─── ITALIANO ────────────────────────────────────────────────────────────────
const it: AppTranslations = {
  nav: {
    howItWorks: 'Come funziona',
    features: 'Funzionalità',
    restaurants: 'Ristoranti',
    pricing: 'Prezzi',
    testimonials: 'Recensioni',
    download: "Scarica l'app",
  },
  hero: {
    badge: 'Già amato da migliaia di utenti!',
    h1pre: 'Il',
    h1post: 'proprio qui vicino.',
    subtitle: "Basta indecisione a pranzo. Scopri i menu del giorno in tempo reale e prenota il tuo tavolo in un attimo.",
    available: 'Disponibile su iOS & Android',
    downloadOn: 'Scarica su',
    availableOn: 'Disponibile su',
    popBadge: '🔥 Popolare',
    fresh: ['Cucina Fresca', 'Prodotti locali'],
    fast: ['Pronto in 20 min', 'Servizio veloce'],
    reserve: 'Prenota',
  },
  problem: {
    badge: 'PROBLEMA → SOLUZIONE',
    h2: 'Non sai mai cosa mangiare?',
    subtitle: 'In pochi secondi, Plat du Jour ti aiuta a trovare un menu disponibile vicino a te — senza chiamate, senza ricerche, senza sorprese.',
    col1: 'Argomento',
    col2: 'Il problema',
    tagline: ['Trova. Scegli. Assapora.', "Dalla indecisione alla decisione in pochi istanti."],
    rows: [
      { label: 'Ricerca', before: 'Navighi tra Google, social media e telefonate.', after: "Un'app sola, tutti i menu intorno a te." },
      { label: 'Tempo', before: '10–20 min persi ogni pranzo a decidere.', after: 'Scelta rapida in meno di un minuto.' },
      { label: 'Informazioni', before: 'Menu incompleti, a volte impossibili da trovare.', after: 'Menu aggiornati in tempo reale dai ristoranti.' },
      { label: 'Prezzo', before: 'Scopri il prezzo solo quando arrivi.', after: 'Prezzi mostrati prima di uscire.' },
      { label: 'Prenotazione', before: 'Telefonate, attesa, nessuna risposta durante il rush.', after: 'Prenota o ordina in pochi clic.' },
      { label: 'Scoperta', before: 'Torni sempre negli stessi posti.', after: 'Scopri nuovi ristoranti vicino a te.' },
    ],
  },
  mascot: {
    badge: 'Il tuo compagno dei pasti',
    h2: 'Cosa mangio a pranzo?',
    lead: 'Mangia meglio, senza cercare.',
    subtitle: "Plat du Jour trova i migliori piatti del giorno intorno a te. Rapido, locale e senza pensieri.",
    cards: [
      { title: 'Ricerca localizzata', desc: 'Tutti i menu disponibili intorno a te, in tempo reale.' },
      { title: 'Scelta semplificata', desc: 'Foto, prezzi e descrizione per decidere in pochi secondi.' },
      { title: 'Prenotazione rapida', desc: "Prenota il tuo tavolo direttamente dall'app, in un clic." },
      { title: 'Nuove scoperte', desc: 'Esplora nuovi ristoranti e menu ogni giorno.' },
    ],
    cta: "Scarica l'app",
    ctaRestaurant: 'Sono un ristoratore',
  },
  howItWorks: {
    badge: 'COME FUNZIONA',
    h2: 'Come funziona?',
    subtitle: 'Tre passaggi dalla ricerca al piacere.',
    float: ['Semplice e Veloce', 'Bastano 3 clic'],
    steps: [
      { title: 'Cerca intorno a te', desc: "Attiva la geolocalizzazione per vedere istantaneamente i ristoranti con un piatto del giorno nelle vicinanze." },
      { title: 'Scopri i menu', desc: "Consulta foto, descrizioni e prezzi dei piatti disponibili oggi." },
      { title: 'Prenota o ordina', desc: "Prenota il tuo tavolo o fai un ordine direttamente tramite l'app." },
    ],
  },
  features: {
    h2: 'Funzionalità Chiave',
    subtitle: 'Tutto ciò di cui hai bisogno per mangiare bene.',
    float: ['Preferito', 'Salva i tuoi preferiti'],
    items: [
      { title: 'Ricerca Locale', desc: "Trova i piatti disponibili in un raggio preciso intorno a te." },
      { title: 'Prenotazione online', desc: "Prenota il tuo tavolo direttamente dall'app." },
      { title: 'Preferiti & Recensioni', desc: 'Salva i tuoi ristoranti preferiti e valuta i piatti assaggiati.' },
      { title: 'Notifiche', desc: 'Ricevi un avviso non appena il tuo ristorante preferito pubblica il menu.' },
    ],
  },
  showcase: {
    badge: 'Funzionalità',
    h2pre: 'Tutto ciò che serve per',
    h2highlight: 'scoprire, scegliere, gustare',
    subtitle: "Un'esperienza semplice per gli utenti e strumenti potenti per i ristoranti.",
    featureLabel: 'Funzionalità',
    benefits: ['Interfaccia chiara e veloce', 'Esperienza coerente iOS & Android', 'Pensato per utenti e ristoranti'],
    discover: "Scopri l'app",
    features: [
      { title: "Scopri il piatto del giorno", subtitle: "Home & suggerimenti vicino a te", description: "Accedi rapidamente ai piatti disponibili, trova i posti migliori ed esplora i menu del giorno senza perdere tempo.", stats: [{ value: "Veloce", label: "Scoperta" }, { value: "Locale", label: "Vicino a te" }] },
      { title: "Spazio ristorante", subtitle: "Dashboard & performance", description: "Una dashboard semplice per monitorare le tue performance, gestire i contenuti e risparmiare tempo ogni giorno.", stats: [{ value: "Stats", label: "Chiare" }, { value: "Gestione", label: "Centralizzata" }] },
      { title: "Onboarding fluido", subtitle: "Presentazione in pochi schermi", description: "Avvio rapido: l'utente capisce l'app in pochi secondi e agisce immediatamente.", stats: [{ value: "< 1 min", label: "Capire" }, { value: "Semplice", label: "Esperienza" }] },
      { title: "Ricerca & filtri", subtitle: "Trova veloce, scegli meglio", description: "Cerca un ristorante, un piatto o una categoria. Filtra per trovare esattamente quello che vuoi.", stats: [{ value: "Smart", label: "Ricerca" }, { value: "Rilevante", label: "Risultati" }] },
      { title: "Referral & premi", subtitle: "Invita, accumula, goditi", description: "Condividi il tuo link e progredisci verso i premi. Un sistema semplice che motiva e fidelizza.", stats: [{ value: "Bonus", label: "Premi" }, { value: "Fun", label: "Challenge" }] },
      { title: "Carta Premium & ID", subtitle: "Accesso & vantaggi con un scan", description: "Una carta premium chiara con QR Code e informazioni utili, per godere di offerte ed esclusive.", stats: [{ value: "QR", label: "Scan rapido" }, { value: "Premium", label: "Vantaggi" }] },
      { title: "Ristoranti & menu", subtitle: "Vista ricca, info utili", description: "Foto, menu, badge premium/regalo e info chiave: tutto presentato per aiutarti a decidere rapidamente.", stats: [{ value: "Menu", label: "Aggiornati" }, { value: "Info", label: "Chiare" }] },
      { title: "Prenotazione", subtitle: "Agisci subito", description: "Prenota facilmente, senza attrito. Un'azione semplice e rapida per trasformare la scoperta in una visita.", stats: [{ value: "1 clic", label: "Prenota" }, { value: "Diretto", label: "Azione" }] },
    ],
  },
  restaurants: {
    badge: 'Per i Ristoratori',
    h2: 'Diventiamo partner del tuo',
    h2highlight: 'successo',
    subtitle: "Non lasciare i tuoi tavoli vuoti. La nostra piattaforma connette il tuo know-how culinario a una comunità locale affamata e fedele.",
    cta: 'Diventa partner',
    revenue: 'RICAVI',
    thisMonth: 'questo mese',
    partnership: ['Partenariato Vincente', 'Unisciti a +200 ristoratori soddisfatti'],
    steps: [
      { title: 'Crea il tuo profilo', desc: 'Metti in risalto il tuo locale con belle foto.' },
      { title: 'Pubblica con un clic', desc: "Un'interfaccia semplificata per aggiungere il tuo menu del giorno in 30 secondi." },
      { title: 'Sviluppa la tua clientela', desc: 'Attrai lavoratori e residenti locali automaticamente.' },
    ],
  },
  pricing: {
    badge: 'Funzionalità & Prezzi',
    h2: 'Scegli la formula',
    h2highlight: 'adatta a te',
    subtitle: "Un'offerta semplice per gli utenti e strumenti potenti per i ristoranti.",
    noCommitment: 'Nessun impegno • Cancella quando vuoi',
    axisUser: 'Utente',
    axisRestaurant: 'Ristorante',
    monthly: 'Mensile',
    yearly: 'Annuale',
    security: 'Pagamento sicuro • Supporto reattivo • Cancellazione in 1 clic',
    plans: {
      user: {
        free: {
          badge: 'Gratuito',
          title: 'Classico',
          price: '0 CHF / mese',
          features: ['Accesso menu & profili', 'Ricerca & geolocalizzazione', '3 menu / giorno', '1 immagine / piatto', '10 foto profilo'],
          cta: 'Inizia gratuitamente',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium',
          features: ['Accesso menu & profili', 'Ricerca & geolocalizzazione', '3 menu / giorno', '1 immagine / piatto', '10 foto profilo', 'Illimitati — senza pubblicità', 'Preferiti & recensioni avanzate', 'Notifiche personalizzate'],
          pricing: {
            monthly: ['4.90 CHF', '/mese'],
            yearly: ['49.- CHF', '/anno', 'Risparmia 2 mesi'],
          },
          cta: 'Passa a Premium',
        },
      },
      restaurant: {
        free: {
          badge: 'Standard',
          title: 'Classico',
          price: '0 CHF / mese',
          features: ['3 menu / giorno', '1 immagine / piatto', '10 foto profilo'],
          cta: 'Inizia gratuitamente',
        },
        premium: {
          badge: 'Premium',
          title: 'Premium / Itinerante',
          features: ['3 menu / giorno', '1 immagine / piatto', '10 foto profilo', '5 menu / giorno', '3 immagini / piatto', 'Omaggi promozionali', 'Profilo in evidenza', 'Gestione posizioni itineranti'],
          pricing: {
            monthly: ['29 CHF', '/mese'],
            yearly: ['290 CHF', '/anno', 'Risparmia 2 mesi'],
          },
          cta: 'Scegli questo piano',
        },
        platinum: {
          badge: 'Platinum',
          title: 'Platinum / Multi-Itinerante',
          features: ['3 menu / giorno', '1 immagine / piatto', '10 foto profilo', '5 menu / giorno', '3 immagini / piatto', 'Omaggi promozionali', 'Profilo in evidenza', 'Gestione posizioni itineranti', 'Fino a 5 stabilimenti', '+5 CHF / unità aggiuntiva'],
          pricing: {
            monthly: ['59 CHF', '/mese'],
            yearly: ['590 CHF', '/anno', 'Risparmia 2 mesi'],
          },
          cta: 'Scegli Platinum',
        },
      },
    },
  },
  testimonials: {
    h2: 'La community adora',
    subtitle: 'Migliaia di utenti e ristoratori soddisfatti',
    prev: 'Precedente',
    next: 'Successivo',
    goTo: 'Vai alla recensione',
    stats: [
      { label: 'Download' },
      { label: 'Ristoranti' },
      { label: 'Menu serviti' },
      { label: 'Valutazione media' },
    ],
  },
  faq: {
    h2: 'Domande frequenti',
    subtitle: 'Tutto quello che devi sapere su Plat du Jour',
    noAnswer: 'Non trovi la risposta alla tua domanda?',
    contact: 'Contatta il nostro supporto',
    items: [
      { q: "L'app è gratuita?", a: "Sì, l'app di base è 100% gratuita per gli utenti. Puoi consultare i menu, leggere le recensioni e cercare ristoranti senza alcun costo." },
      { q: 'Dove è disponibile Plat du Jour?', a: 'Siamo disponibili in diverse città e in continua espansione. Nuove zone vengono aggiunte regolarmente.' },
      { q: 'Come pubblicano i ristoranti i loro menu?', a: "I ristoranti pubblicano tramite uno spazio dedicato: foto + descrizione + prezzo, in pochi secondi. Il menu è poi visibile istantaneamente nell'app." },
      { q: 'Posso prenotare un tavolo?', a: "Sì, se il ristorante partner ha abilitato le prenotazioni. Ricevi una conferma immediata." },
      { q: 'Devo creare un account?', a: "No per consultare. Un account (gratuito) è necessario per prenotare, aggiungere ai preferiti o lasciare una recensione." },
      { q: 'Come vengono verificati i piatti del giorno?', a: 'I piatti sono pubblicati direttamente dai ristoranti. Il nostro sistema rileva i menu obsoleti e richiede automaticamente gli aggiornamenti.' },
      { q: 'Posso filtrare per preferenze alimentari?', a: 'Sì: cucina, budget, distanza e preferenze alimentari (vegetariano, vegano, halal, senza glutine, ecc.).' },
      { q: 'Come diventare ristorante partner?', a: "Nella sezione Ristoranti, compila il modulo. Il team ti ricontatterà per attivare il tuo profilo." },
      { q: "L'app funziona offline?", a: "La modalità gratuita richiede internet. Il Premium può offrire una modalità offline (preferiti + ultimi menu consultati)." },
      { q: 'Come segnalare un problema?', a: "Puoi segnalare da una scheda ristorante o contattarci tramite il supporto. Rispondiamo rapidamente." },
    ],
  },
  download: {
    h2: 'Tutta la città',
    h2highlight: 'in tasca.',
    subtitle: 'Da Berna a Zurigo, scopri le gemme culinarie intorno a te. Scarica Plat du Jour e inizia l\'esplorazione.',
    downloadOn: 'Scarica su',
    availableOn: 'Disponibile su',
    found: '10 ristoranti trovati',
    country: 'Svizzera',
  },
  footer: {
    tagline: 'Il modo migliore per scoprire i menu del giorno intorno a te. Semplice, veloce e gustoso.',
    quickLinks: 'Link Rapidi',
    legal: 'Legale',
    contactTitle: 'Contattaci',
    contactDesc: 'Una domanda? Scrivici.',
    help: 'Hai bisogno di aiuto?',
    contactSupport: 'Contatta il supporto',
    terms: 'Termini di utilizzo',
    privacy: 'Informativa sulla privacy',
    allRights: 'Tutti i diritti riservati.',
    madeBy: 'Fatto da',
    links: { howItWorks: 'Come funziona', testimonials: 'Recensioni', download: "Scarica l'app" },
  },
};

export const translations: Record<Lang, AppTranslations> = { fr, en, de, it };
