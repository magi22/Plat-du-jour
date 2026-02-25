export const STATS = [
  { label: 'Téléchargements', val: 5000, suffix: '+', isDecimal: false },
  { label: 'Restaurants', val: 200, suffix: '+', isDecimal: false },
  { label: 'Menus servis', val: 15000, suffix: '', isDecimal: false },
  { label: 'Note moyenne', val: 4.8, suffix: '/5', isDecimal: true },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sophie Martin',
    role: 'Utilisatrice gourmande',
    location: 'Paris',
    quote:
      'Je ne perds plus de temps à chercher où manger. Je regarde les plats du jour et je réserve en quelques clics. Une révolution pour mes pauses déjeuner !',
    img: 'https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 5,
  },
  {
    name: 'Marc Dubos',
    role: 'Gérant du Petit Bistrot',
    location: 'Lyon',
    quote:
      "Une excellente visibilité pour notre restaurant. Les clients viennent spécifiquement pour le plat du jour qu'ils ont vu sur l'app. Notre chiffre d'affaires a augmenté de 30% !",
    img: 'https://images.unsplash.com/photo-1764711274301-dcd9c97db41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 5,
  },
  {
    name: 'Julie Leroux',
    role: 'Chef cuisinière',
    location: 'Marseille',
    quote:
      "Plat du Jour nous permet de valoriser notre cuisine maison et d'attirer une nouvelle clientèle. L'interface est intuitive et très pratique.",
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 5,
  },
  {
    name: 'Thomas Durand',
    role: 'Cadre en entreprise',
    location: 'Bordeaux',
    quote:
      "Fini le stress de midi ! En 30 secondes je sais exactement ce que je vais manger et où. C'est devenu mon app indispensable au quotidien.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 5,
  },
] as const;
