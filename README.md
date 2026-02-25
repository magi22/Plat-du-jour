<div align="center">
  <img src="./src/assets/Logomascotte.svg" alt="Plat du Jour" width="120" />
  <h1>Plat du Jour</h1>
  <p>Landing page de l'application mobile qui connecte restaurants et utilisateurs autour des menus du jour.</p>
</div>

---

## Stack

- **React 19** + **TypeScript**
- **Vite** — bundler
- **Tailwind CSS** — styles
- **Framer Motion** — animations
- **i18n** — FR / EN / DE / IT (détection automatique du navigateur)

## Lancer le projet

**Prérequis :** Node.js

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

## Déploiement

Le projet est configuré pour **Netlify** (`netlify.toml` inclus).

## Structure

```
src/
├── assets/          # Images, logos, icônes
├── animations/      # Variants Framer Motion
├── components/      # Composants React
│   └── ui/          # Composants génériques (FadeIn, ScrollToTop…)
├── i18n/            # Traductions + contexte de langue
└── index.css        # Styles globaux + animations CSS
```
