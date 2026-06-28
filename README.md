# Maël Gdr — Site coach sportif

Site professionnel de Maël Gdr, coach sportif diplômé STAPS EAPA à Rennes Ouest / Montfort-sur-Meu.

## Stack

- **Next.js 15** (App Router)
- **TypeScript** strict
- **Tailwind CSS v4**
- **Turbopack** (dev)

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Metadata SEO globales + font Manrope
│   ├── page.tsx            # Page principale
│   ├── globals.css         # Variables CSS + reset
│   └── api/contact/        # Route POST formulaire
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Accompagnements.tsx
│   │   ├── Tarifs.tsx
│   │   ├── Avis.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── ScrollRevealInit.tsx
├── hooks/
│   └── useScrollReveal.ts
└── lib/
    └── accompagnements.ts  # Données des 3 accompagnements
```
