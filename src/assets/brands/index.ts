import chrome from "./chrome.svg";
import claudeAi from "./claude-ai.svg";
import cloudflare from "./cloudflare.svg";
import copilot from "./copilot.svg";
import css3 from "./css3.svg";
import cursor from "./cursor.svg";
import cypress from "./cypress.svg";
import figma from "./figma.svg";
import firefox from "./firefox.svg";
import gatsby from "./gatsby.svg";
import github from "./github.svg";
import google from "./google.svg";
import html5 from "./html5.svg";
import javascript from "./javascript.svg";
import jest from "./jest.svg";
import jetbrains from "./jetbrains.svg";
import linkedin from "./linkedin.svg";
import materialUi from "./material-ui.svg";
import mongodb from "./mongodb.svg";
import nextjs from "./nextjs.svg";
import nextjsDark from "./nextjs-dark.svg";
import nextjsLight from "./nextjs-light.svg";
import nodejs from "./nodejs.svg";
import npm from "./npm.svg";
import nuxt from "./nuxt.svg";
import postman from "./postman.svg";
import react from "./react.svg";
import redux from "./redux.svg";
import sass from "./sass.svg";
import stackOverflow from "./stack-overflow.svg";
import tailwind from "./tailwind.svg";
import typescript from "./typescript.svg";
import vercelDark from "./vercel-icon-dark.svg";
import vercelLight from "./vercel-icon-light.svg";
import vscode from "./vscode.svg";
import vue from "./vue.svg";

export const brandIcons = {
  chrome,
  "claude-ai": claudeAi,
  cloudflare,
  copilot,
  css3,
  cursor,
  cypress,
  figma,
  firefox,
  gatsby,
  github,
  google,
  html5,
  javascript,
  jest,
  jetbrains,
  linkedin,
  "material-ui": materialUi,
  mongodb,
  nextjs,
  "nextjs-dark": nextjsDark,
  "nextjs-light": nextjsLight,
  nodejs,
  npm,
  nuxt,
  postman,
  react,
  redux,
  sass,
  "stack-overflow": stackOverflow,
  tailwind,
  typescript,
  "vercel-dark": vercelDark,
  "vercel-light": vercelLight,
  vscode,
  vue,
} as const;

export type BrandIcon = keyof typeof brandIcons;
