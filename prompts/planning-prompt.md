# Goal

Create a personal portfolio website for **“alitadayoni.com”** inspired by **victoreke.com**, replicating its overall structure, layout, and visual style as closely as possible.

---

# Overview

Build a production-ready portfolio site using modern frontend technologies. The goal is to **quickly scaffold a fully working website** that visually matches the referenced site, using mock data where needed. The site should be easy to customize later with real personal information.

The implementation should prioritize **speed of delivery, simplicity, and clean structure**, not architectural complexity.

---

# Requirements

## Tech Stack

- Next.js (latest version)
- TypeScript
- Tailwind CSS v4
- Lucide React (must be used instead of any `react-icons`)
- Umami Analytics (preferred)
  - Also evaluate briefly whether Umami or Google Analytics is better for a simple free setup and recommend one

---

## Design & UI

- Closely replicate the design, layout, and styling of `victoreke.com`
- Use the same general structure, sections, and visual hierarchy
- Match colors, spacing, and typography as closely as possible
- No intentional redesign or visual changes unless required for simplification

---

## Data & Content

- Use **mock/dummy data everywhere**
- Ensure all sections are populated so the site looks complete
- Clearly separate mock data so it can be easily replaced later
- Blog section should exist but contain only:
  - “There is no blog posts yet for that section”

---

## Exclusions (Do NOT include)

- CMS systems (e.g. Sanity, Contentful) and all related env variables
- `react-icons` (must be replaced with `lucide-react`)
- Buy Me a Coffee widget or similar donation components
- `react-github-calendar`
- Any blog system implementation (only static placeholder text)
- Any unnecessary integrations beyond the core stack

---

## Implementation Notes

- You are effectively cloning the structure of the reference site using Next.js
- Ensure code is clean and modular for easy future replacement of content
- Replace all external dependencies from the reference repo with the allowed stack
- Keep setup minimal to enable fast shipping
- Do not assume missing information—ask before making assumptions

---

## Output Expectations

After implementation, provide:

- A fully working portfolio website codebase
- A final **TODO checklist** explaining everything I need to replace to fully personalize the site showing where to update:
  - Name
  - Logo
  - About section
  - Experience
  - Skills
  - GitHub / LinkedIn links
  - Email
  - Resume section
- Update the `project-overview.md` doc

---

# Notes

- Ask for clarification before making assumptions if anything is unclear
- I want the UI be fully like that refrence
- Focus on usability and maintainability of the codebase
- this is the main entry point of the project (we will delete "victoreke.com" later when we completed this project)

---

# References

- `@victoreke.com/`
