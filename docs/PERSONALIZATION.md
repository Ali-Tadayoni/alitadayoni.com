# Personalization Checklist

Everything you need to update to make the site yours. All content lives in `src/data/*.ts`.

## Identity & social links

- [ ] **Name, role, headline, bio** — `src/data/profile.ts`
- [ ] **Email** — `src/data/profile.ts` (`profile.email`)
- [ ] **Resume** — drop your PDF at `public/resume.pdf` (or change `profile.resumeUrl`)
- [ ] **Avatar / profile photo** — `profile.avatarUrl` in `src/data/profile.ts`
- [ ] **GitHub / LinkedIn / X / Email** — `profile.socials` in `src/data/profile.ts`
- [ ] **Logo** — currently a text wordmark in `src/components/global/Navbar.tsx`. Replace with an `<Image>` if you have an SVG (drop it in `public/`).

## Sections

- [ ] **About / long bio** — `profile.longBio` in `src/data/profile.ts`
- [ ] **Experience** — `src/data/experience.ts`
- [ ] **Skills / Tools (Usage section)** — `src/data/skills.ts`
- [ ] **Heroes** — `src/data/heroes.ts`
- [ ] **Projects** — `src/data/projects.ts` (each project routes to `/projects/[slug]`)
- [ ] **Photos** — `src/data/photos.ts` (swap picsum URLs for your own)

## Navigation

- [ ] **Nav links** — `src/data/nav.ts`

## SEO / metadata

- [ ] **Site title & description** — `src/app/layout.tsx` (`metadata`)
- [ ] **Open Graph URL & images** — `src/app/layout.tsx`

## Analytics

- [ ] Sign up at [cloud.umami.is](https://cloud.umami.is) (or self-host)
- [ ] Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_UMAMI_WEBSITE_ID`

## Theme & branding (optional)

- [ ] **Primary color** — `--color-primary` in `src/app/globals.css`
- [ ] **Fonts** — `src/app/layout.tsx` (currently Inter + DM Sans)

## Blog

The `/blog` page intentionally shows only an empty-state message. If/when you want a real blog, replace `src/app/blog/page.tsx`.

## Cleanup

- [ ] Delete the `victoreke.com/` reference folder once you're happy with the new site.
