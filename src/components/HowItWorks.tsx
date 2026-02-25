import React from "react";
import { MapPin, Search, CalendarCheck } from "lucide-react";
import { SectionContainer } from "./ui/SectionContainer";

const steps = [
  {
    icon: <MapPin className="w-7 h-7 text-white" />,
    title: "Recherchez autour de vous",
    description: "Activez la géolocalisation pour voir instantanément les restaurants qui proposent un plat du jour à proximité.",
    color: "bg-orange-400",
  },
  {
    icon: <Search className="w-7 h-7 text-white" />,
    title: "Découvrez les menus",
    description: "Consultez les photos, descriptions et prix des plats disponibles aujourd'hui. Trouvez ce qui vous fait envie.",
    color: "bg-red-400",
  },
  {
    icon: <CalendarCheck className="w-7 h-7 text-white" />,
    title: "Réservez ou commandez",
    description: "Une fois votre choix fait, réservez votre table ou passez commande directement via l'application.",
    color: "bg-green-400",
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden">
    <SectionContainer className="relative">
      {/* Floating badge */}
      <div className="absolute top-10 right-0 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-float-delayed z-10 hidden lg:flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-lg text-xl">🚀</div>
        <div>
          <p className="font-bold text-sm text-gray-900">Simple & Rapide</p>
          <p className="text-[10px] text-gray-500">3 clics suffisent</p>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase shadow-sm">
          COMMENT ÇA MARCHE
        </span>
        <h3 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900">
          Comment ça marche ?
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trouver votre prochain repas n&apos;a jamais été aussi simple.
          Trois étapes pour passer de la recherche au plaisir.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md transform transition-transform duration-300 rotate-0 group-hover:rotate-12 group-hover:-translate-y-1 ${step.color}`}>
                {step.icon}
              </div>
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-100 opacity-60 select-none pointer-events-none group-hover:text-red-100 transition-colors">
                0{index + 1}
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 text-center">{step.title}</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  </section>
);

export default HowItWorks;
