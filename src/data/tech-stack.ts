import type { BrandIcon } from "@/assets/brands";

export type Tech = {
  name: string;
  description: string;
  url: string;
  icon?: BrandIcon;
};

export const techStack: Tech[] = [
  { name: "TypeScript", description: "Typed JavaScript at scale", url: "https://www.typescriptlang.org/", icon: "typescript" },
  { name: "JavaScript", description: "The language of the web", url: "https://developer.mozilla.org/docs/Web/JavaScript", icon: "javascript" },
  { name: "React", description: "UI library", url: "https://react.dev/", icon: "react" },
  { name: "Next.js", description: "React framework", url: "https://nextjs.org/", icon: "nextjs" },
  { name: "Vue.js", description: "Progressive UI framework", url: "https://vuejs.org/", icon: "vue" },
  { name: "Nuxt JS", description: "Vue framework", url: "https://nuxt.com/", icon: "nuxt" },
  { name: "Gatsby", description: "Static site framework", url: "https://www.gatsbyjs.com/", icon: "gatsby" },
  { name: "Node.js", description: "Server-side JavaScript", url: "https://nodejs.org/", icon: "nodejs" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", url: "https://tailwindcss.com/", icon: "tailwind" },
  { name: "Sass", description: "CSS with superpowers", url: "https://sass-lang.com/", icon: "sass" },
  { name: "CSS3", description: "Styling language for the web", url: "https://developer.mozilla.org/docs/Web/CSS", icon: "css3" },
  { name: "HTML5", description: "Markup language for the web", url: "https://developer.mozilla.org/docs/Web/HTML", icon: "html5" },
  { name: "Material UI", description: "React component library", url: "https://mui.com/", icon: "material-ui" },
  { name: "Redux", description: "Predictable state container", url: "https://redux.js.org/", icon: "redux" },
  { name: "MongoDB", description: "Document-oriented database", url: "https://www.mongodb.com/", icon: "mongodb" },
  { name: "Cypress", description: "End-to-end testing framework", url: "https://www.cypress.io/", icon: "cypress" },
  { name: "Jest", description: "JavaScript testing framework", url: "https://jestjs.io/", icon: "jest" },
  { name: "Playwright", description: "Reliable end-to-end testing", url: "https://playwright.dev/" },
  { name: "Cursor", description: "AI-powered code editor", url: "https://cursor.com/", icon: "cursor" },
  { name: "GitHub Copilot", description: "AI pair programmer", url: "https://github.com/features/copilot", icon: "copilot" },
  { name: "Claude Code", description: "Anthropic's agentic CLI", url: "https://claude.com/claude-code", icon: "claude-ai" },
];
