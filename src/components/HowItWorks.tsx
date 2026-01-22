import React from 'react';
import { MapPin, Search, CalendarCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Recherchez autour de vous",
      description: "Activez la géolocalisation pour voir instantanément les restaurants qui proposent un plat du jour à proximité.",
      color: "bg-orange-400"
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Découvrez les menus",
      description: "Consultez les photos, descriptions et prix des plats disponibles aujourd'hui. Trouvez ce qui vous fait envie.",
      color: "bg-red-400"
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-white" />,
      title: "Réservez ou commandez",
      description: "Une fois votre choix fait, réservez votre table ou passez commande directement via l'application.",
      color: "bg-green-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Floating Pop-up */}
        <div className="absolute top-10 right-0 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-float-delayed z-10 hidden lg:flex items-center gap-3">
             <div className="bg-blue-100 p-2 rounded-lg text-xl">🚀</div>
             <div>
                <p className="font-bold text-sm text-gray-900">Simple & Rapide</p>
                <p className="text-[10px] text-gray-500">3 clics suffisent</p>
             </div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Fonctionnement</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comment ça marche ?</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trouver votre prochain repas n'a jamais été aussi simple. Trois étapes pour vous régaler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10 transform translate-y-4"></div>

          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-shadow relative group">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md rotate-3 group-hover:rotate-12 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-50 opacity-50 select-none group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;