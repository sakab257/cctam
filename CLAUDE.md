# Instructions pour Claude

Ce fichier contient les instructions et le contexte pour aider Claude à comprendre ce projet.

## Contexte du Projet

Site vitrine pour **CTAM** (Centre de Contrôle Technique Automobile) avec deux centres :
- **Le Blanc-Mesnil** (LBM) - Centre principal
- **Ivry-sur-Seine** - Second centre (sous le nom TUV DCTA)

## Stack Technique

- **Next.js 16** avec App Router
- **React 19**
- **Tailwind CSS 4** (syntaxe v4 : `bg-linear-to-r` au lieu de `bg-gradient-to-r`)
- **shadcn/ui** (style new-york) - Utiliser `pnpm dlx shadcn@latest add [component]`
- **Lucide React** pour les icônes
- **pnpm** comme gestionnaire de packages

## Structure des Données

### Tarifs (`lib/tarifs-data.ts`)
- `tarifsLBM` / `tarifsIvry` : Tableaux de tarifs par centre
- `lbmInfo` / `ivryInfo` : Infos du centre (adresse, téléphone, promoNote)
- Les tarifs sont différents entre les deux centres

### Avis (`lib/avis-data.ts`)
- `avisLBM` / `avisIvry` : Avis clients par centre
- `statsLBM` / `statsIvry` : Statistiques (note moyenne, total avis, répartition, URL Google)

### Services (`lib/services-data.ts`)
- Services communs aux deux centres

## Patterns Utilisés

### Tabs par Centre
Les sections Tarifs et Avis utilisent des tabs shadcn pour switcher entre les centres :
```tsx
<Tabs defaultValue="lbm">
  <TabsList>
    <TabsTrigger value="lbm">Le Blanc-Mesnil</TabsTrigger>
    <TabsTrigger value="ivry">Ivry-sur-Seine</TabsTrigger>
  </TabsList>
  <TabsContent value="lbm">...</TabsContent>
  <TabsContent value="ivry">...</TabsContent>
</Tabs>
```

### Style des Tabs
```tsx
className="h-12 px-4 sm:px-8 gap-2 rounded-xl font-semibold text-gray-600
  data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600
  data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25
  hover:bg-blue-50 hover:text-primary
  transition-all duration-300"
```

### Composants avec Props Dynamiques
Les composants acceptent les données en props pour afficher les infos du centre sélectionné :
- `TarifsTable` : `tarifs: Tarif[]`
- `InfoCards` : `centerInfo: CenterInfo`
- `AvisHeader` : `stats: StatsAvis`
- `PromoAlert` : `promoNote: string`

## Conventions de Style

- **Couleurs primaires** : Dégradé `from-primary to-blue-600`
- **Shadows** : `shadow-xl`, `shadow-blue-500/25` pour les éléments actifs
- **Transitions** : `transition-all duration-300`
- **Coins arrondis** : `rounded-xl` ou `rounded-2xl`
- **Hover effects** : `hover:bg-blue-50`, `hover:-translate-y-1`

## Fichiers Clés

| Fichier | Description |
|---------|-------------|
| `components/section/tarifs/tarifs.tsx` | Section tarifs avec tabs |
| `components/section/avis/avis.tsx` | Section avis avec tabs |
| `components/navigation/footer.tsx` | Footer avec dialog pour appeler |
| `lib/tarifs-data.ts` | Toutes les données tarifs/infos centres |
| `lib/avis-data.ts` | Toutes les données avis/stats |

## Notes Importantes

1. **Tailwind CSS 4** : Utiliser `bg-linear-to-r` au lieu de `bg-gradient-to-r`
2. **pnpm** : Toujours utiliser pnpm pour les commandes npm
3. **Deux centres** : Toujours penser à mettre à jour les données pour les deux centres
4. **shadcn modifié** : Le composant `tabs.tsx` a été modifié pour permettre les couleurs custom
5. **Langue** : Le site est en français

## Commandes Utiles

```bash
# Développement
pnpm dev

# Build
pnpm build

# Ajouter un composant shadcn
pnpm dlx shadcn@latest add [component-name]
```
