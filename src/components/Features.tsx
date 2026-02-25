import React from 'react';
import { Map, Bell, Star, Calendar } from 'lucide-react';
import { SectionContainer } from './ui/SectionContainer';

const features = [
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Recherche Localisée",
    description: "Trouvez les plats disponibles dans un rayon précis autour de votre position actuelle.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Réservation en ligne",
    description: "Pour les restaurants partenaires, réservez votre table directement depuis l'application.",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Favoris & Avis",
    description: "Sauvegardez vos restaurants préférés et notez les plats que vous avez dégustés.",
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: "Notifications",
    description: "Soyez alerté dès que votre restaurant favori publie son menu du jour.",
  },
];

const Features: React.FC = () => (
  <section className="py-20 bg-gray-50 relative overflow-visible">
    {/* Floating badge */}
    <div className="absolute top-20 left-4 lg:left-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-float z-10 hidden lg:flex items-center gap-3">
      <div className="bg-red-100 p-2 rounded-lg text-xl">❤️</div>
      <div>
        <p className="font-bold text-sm text-gray-900">Coup de cœur</p>
        <p className="text-[10px] text-gray-500">Sauvegardez vos favoris</p>
      </div>
    </div>

    <SectionContainer className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fonctionnalités Clés</h2>
        <p className="mt-4 text-gray-600">Tout ce dont vous avez besoin pour bien manger.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  </section>
);

export default Features;
