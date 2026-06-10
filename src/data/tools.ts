import type { BrandIcon } from "@/assets/brands";

export type Tool = {
  name: string;
  icon: BrandIcon;
  url: string;
};

export const tools: Tool[] = [
  { name: "Chrome", icon: "chrome", url: "https://www.google.com/chrome/" },
  { name: "Cloudflare", icon: "cloudflare", url: "https://www.cloudflare.com/" },
  { name: "Figma", icon: "figma", url: "https://www.figma.com/" },
  { name: "Firefox", icon: "firefox", url: "https://www.mozilla.org/firefox/" },
  { name: "GitHub", icon: "github", url: "https://github.com/" },
  { name: "Google", icon: "google", url: "https://www.google.com/" },
  { name: "JetBrains", icon: "jetbrains", url: "https://www.jetbrains.com/" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
  { name: "NPM", icon: "npm", url: "https://www.npmjs.com/" },
  { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
  { name: "Stack Overflow", icon: "stack-overflow", url: "https://stackoverflow.com/" },
  { name: "Supabase", icon: "supabase", url: "https://supabase.com/" },
  { name: "VS Code", icon: "vscode", url: "https://code.visualstudio.com/" },
];
