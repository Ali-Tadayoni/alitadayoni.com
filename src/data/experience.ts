import type { Job } from "@/types";

export const experience: Job[] = [
  {
    company: "Cloudzy",
    companyLabel: [
      { text: "abrNOC", url: "http://abrnoc.com/" },
      { text: " (Internationally " },
      { text: "Cloudzy", url: "https://cloudzy.com/" },
      { text: ") | VPS & Cloud Infrastructure Provider with 200k+ customers" },
    ],
    role: "Frontend Engineer",
    url: "https://cloudzy.com/",
    logo: "/cloudzy-logo.svg",
    date: "Dec 2024 - Present",
    bullets: [
      "Contributed to the migration of platform admin and customer panels from legacy Vue.js 2 to a centralized Nx monorepo using React, TypeScript, and MUI, improving development scalability and reducing maintenance overhead across shared applications.",
      "Implemented automated E2E testing for 40+ critical user journeys using Cypress, integrating CI/CD pipelines with daily execution and Telegram/email alerts, reducing manual QA effort and improving release confidence.",
      "Led frontend implementation of a subscription-based billing platform alongside the existing Pay-As-You-Go model, enabling recurring subscription purchases and expanding Cloudzy's monetization model.",
      "Reduced VPS Creation page load time by 20% through API request optimization and frontend caching strategies, resulting in faster customer workflows.",
      "Redesigned 150+ SEO-driven landing pages in collaboration with design and SEO teams, strengthening accessibility standards, modernizing the user experience, and establishing a consistent design system across the website.",
    ],
  },
  {
    company: "Cloudzy",
    companyLabel: [
      { text: "abrNOC", url: "http://abrnoc.com/" },
      { text: " (" },
      { text: "Cloudzy", url: "https://cloudzy.com/" },
      { text: ")" },
    ],
    role: "Frontend Intern",
    url: "https://cloudzy.com/",
    logo: "/cloudzy-logo.svg",
    date: "Oct 2024 - Dec 2024",
    bullets: [
      "Developed internal operational dashboards and infrastructure management tools used by support and infrastructure teams to monitor services, manage resources, and streamline daily workflows.",
      "Built a real-time VPS monitoring dashboard displaying CPU, RAM, disk I/O, and network metrics through live charts and streaming telemetry data, including dynamic feature availability and pricing logic integrated into the VPS creation workflow.",
      "Contributed to migrating landing pages from Nuxt.js to WordPress by redesigning frontend UI.",
    ],
  },
];
