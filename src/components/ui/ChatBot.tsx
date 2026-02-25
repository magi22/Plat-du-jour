import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import Mascotte from '../../assets/Mascotte@2x.png';

const WA_URL  = 'https://wa.me/221785421733';
const TG_URL  = 'https://t.me/+221785421733';

type QA = { q: string; a: string | null; complex?: true };

const QA_LIST: QA[] = [
  { q: "Comment télécharger l'app ?",   a: "Disponible gratuitement sur l'App Store (iOS) et Google Play (Android). Cherchez « Plat du Jour » et installez-la !" },
  { q: "L'app est-elle gratuite ?",      a: "Oui ! La version de base est 100% gratuite. Une offre Premium existe pour les utilisateurs et les restaurants souhaitant plus de fonctionnalités." },
  { q: "Comment ça fonctionne ?",        a: "Activez la géolocalisation, parcourez les menus du jour autour de vous, choisissez votre plat et réservez en quelques clics. C'est aussi simple que ça !" },
  { q: "Disponible dans ma ville ?",     a: null, complex: true },
  { q: "Inscrire mon restaurant",        a: null, complex: true },
  { q: "Problème technique / autre",     a: null, complex: true },
];

export function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [answer, setAnswer]   = useState<string | null>(null);
  const [complex, setComplex] = useState(false);
  const [hint, setHint]       = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  /* Message d'aide automatique après 15 secondes */
  useEffect(() => {
    timer.current = setTimeout(() => setHint(true), 15000);
    return () => clearTimeout(timer.current);
  }, []);

  function dismissHint() { setHint(false); clearTimeout(timer.current); }

  function handleQuestion(qa: QA) {
    if (qa.a) { setAnswer(qa.a); setComplex(false); }
    else       { setAnswer(null); setComplex(true);  }
  }

  function reset() { setAnswer(null); setComplex(false); }

  return (
    <>
      {/* Bulle d'aide automatique (après 15 s) */}
      <AnimatePresence>
        {hint && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={() => { setOpen(true); dismissHint(); }}
            className="fixed bottom-[9.5rem] right-6 z-50 bg-white border border-gray-100 rounded-2xl rounded-br-sm shadow-xl px-4 py-3 max-w-[200px] cursor-pointer hover:shadow-2xl transition-shadow"
          >
            {/* Bouton fermer */}
            <button
              onClick={(e) => { e.stopPropagation(); dismissHint(); }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600 text-xs flex items-center justify-center transition-colors"
            >×</button>
            {/* Triangle queue de bulle */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
            <p className="text-sm font-bold text-gray-800">Besoin d'aide ? 👋</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-snug">Je suis là pour vous aider !</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulle flottante */}
      <button
        onClick={() => { setOpen(o => !o); reset(); dismissHint(); }}
        aria-label="Aide & Chat"
        className="fixed bottom-[6.5rem] right-6 z-50 w-12 h-12 rounded-full bg-primary text-white
          border-2 border-white/80
          shadow-[0_8px_24px_rgba(193,17,30,0.40)]
          flex items-center justify-center hover:scale-110 transition-all active:scale-95 animate-secousse"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"   initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}}  transition={{duration:.2}}><X size={22}/></motion.span>
            : <motion.span key="msg" initial={{rotate:90,opacity:0}}  animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:.2}}><MessageCircle size={22}/></motion.span>
          }
        </AnimatePresence>
      </button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-[10.5rem] right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 rounded-2xl border border-gray-100 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col"
          >
            {/* En-tête */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <img src={Mascotte} alt="" className="h-10 w-auto drop-shadow-md" draggable={false} />
              <div>
                <p className="font-bold text-white text-sm leading-tight">Plat du Jour</p>
                <p className="text-white/80 text-xs">Assistant virtuel</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70 text-xs">En ligne</span>
              </div>
            </div>

            {/* Corps */}
            <div className="flex-1 p-4 space-y-3 max-h-64 overflow-y-auto">
              {!answer && !complex && (
                <>
                  <p className="text-xs text-gray-500 text-center">Bonjour 👋 Comment puis-je vous aider ?</p>
                  <div className="space-y-2">
                    {QA_LIST.map((qa, i) => (
                      <button key={i} onClick={() => handleQuestion(qa)}
                        className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border text-left text-sm transition-all group ${
                          qa.complex
                            ? 'border-red-200 bg-red-50 text-primary hover:bg-red-100 hover:border-primary/50 font-semibold'
                            : 'border-gray-100 bg-gray-50 text-gray-800 hover:bg-red-50 hover:border-primary/30'
                        }`}>
                        <span>{qa.q}</span>
                        <ChevronRight size={14} className={`flex-shrink-0 transition-colors ${qa.complex ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {answer && (
                <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-700 leading-relaxed">
                    {answer}
                  </div>
                  <button onClick={reset} className="text-xs text-primary hover:underline">← Autre question</button>
                </motion.div>
              )}

              {complex && (
                <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="space-y-3">
                  <div className="bg-red-50 border border-red-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-primary font-medium leading-relaxed">
                    Pour cette demande, un membre de l'équipe peut vous aider directement 👇
                  </div>
                  <a href={WA_URL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Contacter sur WhatsApp
                  </a>
                  <a href={TG_URL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#229ED9] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Contacter sur Telegram
                  </a>
                  <button onClick={reset} className="text-xs text-primary hover:underline">← Autre question</button>
                </motion.div>
              )}
            </div>

            {/* Pied */}
            <div className="border-t border-gray-100 px-4 py-2 flex items-center gap-2 bg-gray-50">
              <Send size={14} className="text-gray-400" />
              <span className="text-xs text-gray-400 italic">Réponse instantanée</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
