import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/translations';

const LANGS: { code: Lang; flag: string }[] = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'it', flag: '🇮🇹' },
];

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Fermer au clic extérieur */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = LANGS.find(l => l.code === lang)!;

  return (
    <div ref={ref} className="flex items-center gap-1.5 flex-wrap">
      {/* Bouton globe — langue active */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-primary hover:bg-gray-100 transition-all"
      >
        <Globe size={16} className="text-gray-500 flex-shrink-0" />
        <span>{current.flag}</span>
        <span className="uppercase text-xs tracking-wider">{current.code}</span>
      </button>

      {/* Pills horizontaux — s'ouvrent inline, pas de dropdown */}
      {open && (
        <div className="flex items-center gap-1 animate-pop-in">
          {LANGS.map(({ code, flag }) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                code === lang
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{flag}</span>
              <span className="uppercase">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
