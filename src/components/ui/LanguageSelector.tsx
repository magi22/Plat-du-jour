import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/translations';

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
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
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-primary hover:bg-gray-100 transition-all"
      >
        <Globe size={16} className="text-gray-500" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline uppercase text-xs tracking-wider">{current.code}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-pop-in"
        >
          {LANGS.map(({ code, label, flag }) => (
            <li key={code} role="option" aria-selected={code === lang}>
              <button
                onClick={() => { setLang(code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                  ${code === lang
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-gray-700 hover:bg-gray-50 font-medium'
                  }`}
              >
                <span className="text-base">{flag}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
