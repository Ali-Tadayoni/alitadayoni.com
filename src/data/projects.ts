import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    tagline: "A tiny, fast static-site generator for technical writers.",
    description:
      "Lumen is a Markdown-first SSG focused on long-form technical content. It ships with syntax highlighting, citations, and a built-in reading-time estimate. Built with Rust and a thin TypeScript wrapper.",
    coverImage: "https://picsum.photos/seed/lumen/1200/700",
    logo: "✨",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    tags: ["Rust", "TypeScript", "CLI"],
  },
  {
    slug: "ferry",
    name: "Ferry",
    tagline: "Type-safe job queue for Node, with a tiny footprint.",
    description:
      "Ferry is a Postgres-backed job queue that exposes a single typed API for producing and consuming jobs. No Redis, no extra infra — just your database.",
    coverImage: "https://picsum.photos/seed/ferry/1200/700",
    logo: "⛴️",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    tags: ["Node", "Postgres", "TypeScript"],
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "A keyboard-first browser for engineers.",
    description:
      "Atlas is a browser built around command palettes and link previews. It's a personal project — half experiment, half daily driver.",
    coverImage: "https://picsum.photos/seed/atlas/1200/700",
    logo: "🗺️",
    liveUrl: "https://example.com",
    tags: ["Electron", "React"],
  },
  {
    slug: "chime",
    name: "Chime",
    tagline: "Healthier notifications for focused work.",
    description:
      "Chime batches and summarizes notifications across your apps, delivering them in scheduled windows. Built with Tauri and Rust.",
    coverImage: "https://picsum.photos/seed/chime/1200/700",
    logo: "🔔",
    repoUrl: "https://github.com/",
    tags: ["Tauri", "Rust"],
  },
  {
    slug: "harbor",
    name: "Harbor",
    tagline: "Self-hosted analytics for indie makers.",
    description:
      "A privacy-friendly analytics service you can deploy in a single binary. Designed for personal sites and small product launches.",
    coverImage: "https://picsum.photos/seed/harbor/1200/700",
    logo: "⚓",
    liveUrl: "https://example.com",
    tags: ["Go", "SQLite"],
  },
  {
    slug: "prism",
    name: "Prism",
    tagline: "A design system for data-dense interfaces.",
    description:
      "Prism is a React component library tuned for dashboards: dense tables, virtualized lists, and well-considered keyboard handling.",
    coverImage: "https://picsum.photos/seed/prism/1200/700",
    logo: "🔷",
    repoUrl: "https://github.com/",
    tags: ["React", "Design Systems"],
  },
];
