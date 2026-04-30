# CLAUDE.md

Dit bestand bevat instructies voor Claude Code bij het werken aan dit project.
Lees dit bestand altijd volledig voordat je begint met werken.

---

## Taal

Schrijf altijd in het **Nederlands** — code comments, commit messages, documentatie, en antwoorden in de terminal. Uitzondering: variabelenamen en technische termen mogen Engels zijn (dit is standaard in code).

---

## Tech Stack

| Technologie | Versie | Gebruik |
|---|---|---|
| **Next.js** | 14 (App Router) | Framework |
| **TypeScript** | 5 | Taal |
| **Tailwind CSS** | 3 | Styling |
| **Supabase** | 2 | Database (PostgreSQL) |

---

## Database (Supabase)

- Gebruik de Supabase client uit `src/lib/supabase.ts` voor alle databaseinteracties
- Sla credentials op in `.env.local` (zie `.env.local.example`)
- Gebruik altijd Row Level Security (RLS) in Supabase
- Schrijf geen ruwe SQL tenzij Supabase's query builder tekortschiet

### Omgevingsvariabelen
```
NEXT_PUBLIC_SUPABASE_URL=https://jouw-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=jouw-anon-key
```

---

## Mappenstructuur

```
src/
├── app/          # Next.js pagina's (App Router)
├── components/   # Herbruikbare React componenten
└── lib/          # Hulpfuncties en clients (bijv. supabase.ts)
```

---

## Regels & Werkwijze

### ⛔ NOOIT zonder toestemming committen
Voer **nooit** een `git commit`, `git push`, of andere schrijfoperatie naar versiebeheer uit zonder expliciete toestemming van de gebruiker. Toon altijd eerst wat je wil committen en wacht op bevestiging.

### Code kwaliteit
- Gebruik altijd TypeScript — geen `any` tenzij absoluut noodzakelijk
- Componenten krijgen altijd een expliciet return type
- Gebruik Tailwind CSS voor styling, geen losse CSS-bestanden

### Installaties
- Voeg nieuwe packages altijd toe aan `package.json` via `npm install <package>`
- Vraag toestemming voordat je grote dependencies installeert

---

## Snelle start

```bash
npm install
cp .env.local.example .env.local
# Vul .env.local in met je Supabase credentials
npm run dev
```
