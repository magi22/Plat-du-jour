import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Grâce à Plat du Jour, mes plats se vendent plus vite ! Je n'ai plus de gaspillage et je touche des clients qui ne connaissaient pas mon restaurant.",
      author: "Chef Adama",
      role: "Le Bistrot Gourmand",
      image: "https://picsum.photos/100/100?man=1",
      rating: 5
    },
    {
      text: "Application géniale pour le déjeuner. Je ne perds plus de temps à chercher où manger, je regarde les plats du jour et je réserve en 2 clics.",
      author: "Sophie Martin",
      role: "Utilisatrice gourmande",
      image: "https://picsum.photos/100/100?woman=1",
      rating: 5
    },
    {
      text: "Depuis que nous utilisons l'app, nos mardis midis sont complets. La fonctionnalité de notification aux alentours est redoutable !",
      author: "Marc & Julie",
      role: "La Table des Copains",
      image: "https://picsum.photos/100/100?couple=1",
      rating: 4
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-orange-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-9xl">🍕</div>
            <div className="absolute bottom-20 right-20 text-9xl">🥗</div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-white shadow-md mb-4 animate-bounce">
             <img src="https://cdn-icons-png.flaticon.com/512/3461/3461980.png" alt="Mascot" className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">La communauté adore</h2>
          <p className="mt-4 text-gray-600">Découvrez ce que nos utilisateurs et partenaires disent de nous.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative">
            
            {/* Main Card */}
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl border border-orange-100 min-h-[350px] flex flex-col justify-center transition-all duration-500 transform">
               <Quote className="absolute top-8 left-8 text-orange-200 w-16 h-16 opacity-50" />
               
               <div className="relative z-10 text-center animate-pop-in key={activeIndex}">
                   <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                size={20} 
                                className={`${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                            />
                        ))}
                   </div>
                   
                   <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed mb-8">
                     "{testimonials[activeIndex].text}"
                   </p>
                   
                   <div className="flex flex-col items-center">
                       <div className="w-20 h-20 p-1 bg-white rounded-full shadow-lg mb-3">
                           <img 
                               src={testimonials[activeIndex].image} 
                               alt={testimonials[activeIndex].author} 
                               className="w-full h-full rounded-full object-cover"
                           />
                       </div>
                       <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].author}</h4>
                       <p className="text-primary text-sm font-medium">{testimonials[activeIndex].role}</p>
                   </div>
               </div>
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all focus:outline-none"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all focus:outline-none"
            >
                <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
                />
            ))}
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center divide-x divide-gray-200/50">
            {[
                { label: "Téléchargements", val: "5k+" },
                { label: "Restaurants", val: "200+" },
                { label: "Menus servis", val: "15k" },
                { label: "Note moyenne", val: "4.8" },
            ].map((stat, idx) => (
                <div key={idx} className="px-2">
                    <div className="text-4xl font-black text-gray-900 mb-1">{stat.val}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;