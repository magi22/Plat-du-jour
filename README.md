<div align="center">
  <img src="./src/assets/Logomascotte.svg" alt="Plat du Jour" width="140" />
  <h1>Plat du Jour</h1>
  <p><strong>L'application qui connecte restaurants et gourmands autour des menus du jour.</strong></p>
  <p>Trouvez un plat du jour près de chez vous, réservez en quelques clics et ne perdez plus de temps à midi.</p>
  <br/>
  <a href="https://plat-du-jour.vercel.app">🌐 plat-du-jour.vercel.app</a>
</div>

---

## À propos

**Plat du Jour** est une landing page pour une application mobile suisse.
Elle s'adresse à deux audiences :

- **Utilisateurs** — trouvez les menus du jour autour de vous par géolocalisation, comparez les prix, réservez votre table en 1 clic.
- **Restaurateurs** — publiez votre menu du jour en 30 secondes, gagnez en visibilité et remplissez vos tables.

---

## Stack technique

| Technologie | Rôle |
|---|---|
| React 19 + TypeScript | Framework UI + typage |
| Vite | Build tool rapide |
| Tailwind CSS | Styles utilitaires |
| Framer Motion | Animations et transitions |
| Radix UI | Composants accessibles (Accordion) |
| Embla Carousel | Carrousel témoignages |
| Lucide React | Icônes |

---

## Lancer le projet

**Prérequis :** Node.js 18+

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans le navigateur.

## Build de production

```bash
npm run build
```

## Déploiement

Le projet est déployé sur **Vercel** — chaque push sur `main` déclenche un déploiement automatique.

---

## Structure du projet

```
src/
├── App.tsx                    # Point d'entrée — séquençage des sections
├── index.css                  # Animations CSS custom + fonds animés
│
├── i18n/
│   ├── translations.ts        # Toutes les traductions FR / EN / DE / IT
│   └── LanguageContext.tsx    # Contexte React + hook useLanguage()
│
├── animations/
│   └── variants.ts            # Variants Framer Motion réutilisables
│
├── constants/
│   └── testimonials.ts        # Données témoignages et statistiques
│
├── hooks/
│   └── useScrolled.ts         # Détection scroll pour le header
│
├── lib/
│   └── getStoreLink.ts        # Lien store adapté iOS / Android
│
├── assets/                    # Images, logos, icônes, captures app
│
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── ProblemSolution.tsx
    ├── HowItWorks.tsx
    ├── Features.tsx
    ├── AppShowcase.tsx
    ├── RestaurantSection.tsx
    ├── Pricing.tsx
    ├── Testimonials.tsx
    ├── Faq.tsx
    ├── DownloadSection.tsx
    ├── Footer.tsx
    └── ui/
        ├── ChatBot.tsx           # Assistant conversationnel flottant
        ├── ScrollToTop.tsx       # Bouton retour en haut
        ├── LanguageSelector.tsx  # Sélecteur FR / EN / DE / IT
        ├── FadeIn.tsx
        ├── SectionContainer.tsx
        └── ImageWithFallback.tsx
```

---

## Fonctionnalités

- **Multilingue** — FR / EN / DE / IT avec détection automatique de la langue du navigateur
- **Responsive** — optimisé mobile, tablette et desktop
- **Animations** — entrées au scroll, fonds animés, éléments flottants
- **Chatbot** — répond aux questions fréquentes, redirige vers WhatsApp / Telegram pour les demandes complexes
- **Tarifs en CHF** — adapté au marché suisse
- **Accessibilité** — composants Radix UI, aria-labels, navigation clavier

---

## Sections de la landing page

1. **Hero** — accroche principale + téléchargement app
2. **Problème → Solution** — tableau comparatif avant/après
3. **Comment ça marche** — 3 étapes simples
4. **Fonctionnalités** — 4 points clés
5. **AppShowcase** — 8 fonctionnalités en onglets interactifs
6. **Espace Restaurateurs** — arguments pour les restaurants partenaires
7. **Tarifs** — plans Gratuit / Premium pour utilisateurs et restaurants
8. **Témoignages** — carrousel avec stats animées
9. **FAQ** — 10 questions/réponses en accordéon
10. **Télécharger** — CTA final avec carte interactive

---

<div align="center">
  <sub>Fait avec ❤️ par <strong>WIICODE</strong></sub>
</div>
