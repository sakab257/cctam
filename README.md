# CTAM - Centre de Contrôle Technique Automobile

Site vitrine pour les centres de contrôle technique CTAM situés à **Le Blanc-Mesnil** et **Ivry-sur-Seine**.

## Tech Stack

- **Framework** : Next.js 16 (App Router)
- **React** : 19.2
- **Styling** : Tailwind CSS 4
- **UI Components** : shadcn/ui (style new-york)
- **Icons** : Lucide React
- **Package Manager** : pnpm

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Build

```bash
pnpm build
pnpm start
```

## Structure du Projet

```
ctam/
├── app/                    # App Router (Next.js)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux + variables CSS
├── components/
│   ├── ui/                 # Composants shadcn/ui
│   ├── hero/               # Section Hero
│   ├── section/
│   │   ├── services/       # Section Services
│   │   ├── tarifs/         # Section Tarifs (avec tabs par centre)
│   │   └── avis/           # Section Avis Google (avec tabs par centre)
│   └── navigation/         # Header, Footer, Logo
├── lib/
│   ├── tarifs-data.ts      # Données tarifs (LBM + Ivry)
│   ├── avis-data.ts        # Données avis Google (LBM + Ivry)
│   ├── services-data.ts    # Données services
│   └── utils.ts            # Utilitaires (cn)
└── public/                 # Assets statiques
```

## Centres

### Le Blanc-Mesnil (LBM)
- Adresse : 17 rue Corneille, 93150 Le Blanc-Mesnil
- Téléphone : 01 48 67 66 66

### Ivry-sur-Seine
- Adresse : 3-5 bd Hippolyte Marquès, 94200 Ivry-sur-Seine
- Téléphone : 01 46 71 11 22

## Fonctionnalités

- **Tabs par centre** : Les sections Tarifs et Avis affichent des données différentes selon le centre sélectionné
- **Responsive** : Design adapté mobile, tablette et desktop
- **Animations** : Transitions fluides et effets hover
- **SEO** : Balises sémantiques et accessibilité
- **Réservation en ligne** : Système Autoplanning (LBM) et iFrame (Ivry)

## Système de Réservation

### Le Blanc-Mesnil - Autoplanning
Widget JavaScript natif Autoplanning (ID: 4523) intégré directement dans la page.
- **Desktop** : Agenda affiché en ligne
- **Mobile** : Bouton CTA qui ouvre l'agenda en modal

### Ivry-sur-Seine - iFrame
Système de réservation externe intégré via iFrame.

## État d'Avancement

### ✅ Fait
- Pages principales (Accueil, Tarifs, Services, Avis, Contact, FAQ, CGV, Politique de confidentialité)
- Design responsive mobile/desktop
- SEO de base (métadonnées, sitemap, robots.txt, Open Graph)
- Système de réservation pour les deux centres
- Tabs pour switcher entre les centres

### 📋 À faire (post-déploiement)
- Google Analytics 4 - Tracking du trafic
- Google Tag Manager - Gestion des tags
- Tracking de conversion AdWords - Mesurer les réservations
- Schema.org JSON-LD - Rich snippets Google
- Optimisation des images Open Graph

## Ajout de composants shadcn

```bash
pnpm dlx shadcn@latest add [component-name]
```
