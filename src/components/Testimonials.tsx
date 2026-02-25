import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionContainer } from "./ui/SectionContainer";
import { STATS, TESTIMONIALS } from "../constants/testimonials";

function AnimatedCounter({
  target,
  duration = 2000,
  isDecimal = false,
}: {
  target: number;
  duration?: number;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const el = document.getElementById("stats-section");
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries?.[0]?.isIntersecting) return;
        setHasAnimated(true);
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = easeOutQuart * target;
          if (isDecimal) setCount(parseFloat(currentValue.toFixed(1)));
          else setCount(Math.floor(currentValue));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated, isDecimal]);

  return <span>{isDecimal ? count.toFixed(1) : count.toLocaleString()}</span>;
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">

      <SectionContainer className="relative z-10">
        {/* Stats */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/70 backdrop-blur-xl px-6 py-5 rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:border-primary/40 transition-all">
                  <div className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#ff4757]">
                    <AnimatedCounter target={stat.val} isDecimal={stat.isDecimal} />
                    {stat.suffix}
                  </div>
                </div>
              </div>
              <div className="text-gray-700 font-semibold uppercase tracking-wider text-xs md:text-sm mt-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            La communauté adore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-600 text-lg mt-3"
          >
            Des milliers d'utilisateurs et restaurateurs satisfaits
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.45 }}
                    className="bg-white/75 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 hover:border-primary/30 transition-all h-full flex flex-col relative group shadow-[0_14px_60px_rgba(0,0,0,0.08)]"
                  >
                    <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />

                    <div className="flex gap-1 mb-4 relative z-10">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="text-primary" />
                      ))}
                    </div>

                    <p className="text-gray-800 text-base mb-8 relative z-10 leading-relaxed flex-grow">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/25 group-hover:border-primary/50 transition-colors shadow-md">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold">{t.name}</div>
                        <div className="text-gray-600 text-sm">{t.role}</div>
                        <div className="text-primary text-xs font-semibold">{t.location}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/80 backdrop-blur-md hover:bg-primary text-gray-900 hover:text-white rounded-full flex items-center justify-center border border-gray-200 hover:border-primary transition-all shadow-lg z-10" aria-label="Précédent">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/80 backdrop-blur-md hover:bg-primary text-gray-900 hover:text-white rounded-full flex items-center justify-center border border-gray-200 hover:border-primary transition-all shadow-lg z-10" aria-label="Suivant">
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-2 rounded-full transition-all ${idx === selectedIndex ? "w-8 bg-primary shadow-[0_0_12px_rgba(193,17,30,0.35)]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Aller au témoignage ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
