# Project Overview

A personal portfolio website for **alitadayoni.com**.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** — configured via `@theme` in `src/app/globals.css` (no `tailwind.config.*`)
- **lucide-react** for all icons
- **next-themes** for dark/light theme
- **framer-motion** for subtle section entrance animations
- **Umami** for analytics (opt-in via env vars)

## Goals

- A clean, fast personal site that's easy to keep up to date
- All personalizable content lives in `src/data/*.ts` so updates are content-only
- Production-ready scaffolding with mock data — swap content, not code

## Layout

```
src/
├── app/
│   ├── layout.tsx           # Fonts, theme provider, navbar, footer, Umami
│   ├── page.tsx             # Home: Hero + Experience
│   ├── globals.css          # Tailwind v4 + theme tokens
│   ├── about/page.tsx       # Bio, tools, heroes
│   ├── projects/page.tsx    # Project grid
│   ├── projects/[slug]/page.tsx
│   ├── blog/page.tsx        # Empty-state placeholder
│   ├── photos/page.tsx      # Image gallery
│   └── not-found.tsx
├── components/
│   ├── global/              # Navbar, Footer, Theme*, SocialIcon
│   ├── shared/              # Slide, PageHeading, EmptyState
│   ├── home/                # Hero, Experience
│   ├── about/               # Bio, Usage, Heroes
│   └── projects/            # ProjectCard
├── data/                    # All personalizable content lives here
└── types/                   # Shared TypeScript types
```

## Design Tokens

Primary accent: `#33E092` (green). Dark-mode-first with a light-mode toggle. Fonts: **Inter** (body) and **DM Sans** (display).

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npm run lint
```

## Environment

Copy `.env.example` → `.env.local` and set:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` — Umami site ID (optional; script is skipped if unset)
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` — defaults to `https://cloud.umami.is/script.js`
