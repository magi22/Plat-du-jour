import React from 'react';
import { ChefHat, TrendingUp, Users, Handshake } from 'lucide-react';

const RestaurantSection: React.FC = () => {
  return (
    <section id="restaurants" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side - Collaboration */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Collaboration Restaurant" 
                    className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="flex items-center gap-3 text-white">
                        <div className="bg-primary p-2 rounded-full animate-bounce">
                            <Handshake className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-lg">Partenariat Gagnant</p>
                            <p className="text-sm opacity-90">Rejoignez +200 restaurateurs heureux</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 animate-float">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs font-bold">REVENUS</span>
                    <TrendingUp className="text-green-500 w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">+ 1,250€</div>
                <div className="text-xs text-green-600 bg-green-50 inline-block px-2 py-1 rounded-full font-medium">
                    ce mois-ci
                </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4 animate-slide-up">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <ChefHat className="text-primary w-6 h-6" />
                </div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Espace Restaurateurs</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Devenons partenaires de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">succès</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ne laissez plus vos tables vides. Notre plateforme connecte votre savoir-faire culinaire à une communauté locale affamée et fidèle.
            </p>

            <div className="space-y-6 mb-10">
                {[
                    { id: 1, title: "Créez votre profil", desc: "Mettez en valeur votre établissement avec de belles photos." },
                    { id: 2, title: "Publiez en un clic", desc: "Une interface simplifiée pour ajouter votre menu du jour en 30 secondes." },
                    { id: 3, title: "Développez votre clientèle", desc: "Attirez les travailleurs et résidents locaux automatiquement." }
                ].map((item, idx) => (
                    <div key={item.id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default animate-slide-up" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-primary font-bold text-xl">
                            {item.id}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="group relative bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-95 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <span className="relative z-10 flex items-center gap-2">
                    Devenir partenaire
                    <Users size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;