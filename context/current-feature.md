# Current Feature

_None — awaiting next feature._

## Status

## Goals

## Notes

## History

- **Experience Timeline** — Rebuilt homepage Work Experience as a scroll-driven vertical timeline (CSS `animation-timeline`/`@property`, no JS). Centered gradient header, alternating cards on desktop / stacked on mobile, Cloudzy markers linking to cloudzy.com. Replaced `Job` type (`date` + `bullets[]`).
- **About Page Redesign** — Rebuilt `/about` with new Bio (greeting title, reusable spotlight-hover `Download Resume` button, animated "Open for hire" indicator, email with icon), `Tools And Platforms` infinite-marquee section (4×-duplicated track for seamless loop, distinct shuffled rows, edge fades, pause on hover), `Tech Stack` 1/2/3-col card grid with global-pointer spotlight (`background-attachment: fixed`, per-card hue rotation, crisp border ring), and data-driven `Heroes` cards (Traversy, Schmedtmann, Abramov). Extracted shared `SectionHeading` (also adopted by homepage Experience) and `SpotlightButton`. Moved `Brand-Aasets/` → `src/assets/brands/` with typed registry; added theme-aware Next.js/Vercel variants used in Footer.
- **Projects Page Redesign** — Rebuilt `/projects` with a colorful card grid (per-project solid bg, transparent-PNG laptop mockups, hover-lift). Introduced reusable `Badge` component with tech-specific colors (no border-radius). Image + title link to live demo (title underlines on hover); Source Code CTA uses `SpotlightLinkButton` with GitHub icon. Refreshed `Project` type (`image: StaticImageData`, `bgColor`; dropped `logo`/`tagline`/`coverImage`) and replaced mock data with 9 real projects (kebab-case PNG assets). Added homepage `Projects.` section (3 featured) + "See all projects" link, "View more on GitHub" link at the bottom of `/projects`, gradient styling on `PageHeading` matching `SectionHeading`, and registered `supabase` brand icon in Tools and Platforms.
