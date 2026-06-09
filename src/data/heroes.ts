import type { Hero } from "@/types";

export const heroes: Hero[] = [
  { name: "Rich Hickey", role: "Creator of Clojure", url: "https://en.wikipedia.org/wiki/Rich_Hickey", met: false },
  { name: "Dan Abramov", role: "React core, educator", url: "https://overreacted.io/", met: false },
  { name: "Julia Evans", role: "Engineer & writer", url: "https://jvns.ca/", met: false },
  { name: "Guillermo Rauch", role: "Founder, Vercel", url: "https://rauchg.com/", met: true },
  { name: "Linus Torvalds", role: "Creator of Linux & Git", url: "https://en.wikipedia.org/wiki/Linus_Torvalds", met: false },
  { name: "Mitchell Hashimoto", role: "Co-founder, HashiCorp", url: "https://mitchellh.com/", met: false },
];
