import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/translations';

const LANGS: { code: Lang; cc: string }[] = [
  { code: 'fr', cc: 'fr' },
  { code: 'en', cc: 'gb' },
  { code: 'de', cc: 'de' },
  { code: 'it', cc: 'it' },
];

const Flag = ({ cc, alt }: { cc: string; alt: string }) => (
  <img
    src={`https://flagcdn.com/w20/${cc}.png`}
    srcSet={`https://flagcdn.com/w40/${cc}.png 2x`}
    width={20}
    height={15}
    alt={alt}
    className="rounded-[2px] flex-shrink-0"
  />
);

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      {/* Bouton globe — masqué quand les pills sont ouverts (évite le doublon) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-haspopup="true"
          aria-expanded={open}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-primary hover:bg-gray-100 transition-all"
        >
          <Globe size={16} className="text-gray-500 flex-shrink-0" />
          <Flag cc={current.cc} alt={current.code} />
          <span className="uppercase text-xs tracking-wider">{current.code}</span>
        </button>
      )}

      {/* Pills horizontaux avec drapeaux — sans répétition */}
      {open && (
        <div className="flex items-center gap-1 animate-pop-in">
          {LANGS.map(({ code, cc }) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                code === lang
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Flag cc={cc} alt={code} />
              <span className="uppercase">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
