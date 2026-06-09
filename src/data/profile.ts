import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Ali Tadayoni",
  shortName: "Ali",
  role: "Software Engineer",
  headline: "I build pragmatic software for the web.",
  bio: "I'm a software engineer based in Toronto, building tools and products that try to make the web a little kinder and a lot faster.",
  longBio: [
    "I'm Ali — a software engineer who enjoys building products end-to-end. I've spent the last several years working across the stack, with a soft spot for cleanly modeled data and the small UI details users don't consciously notice.",
    "Lately I've been spending most of my time on developer infrastructure and platform tooling — the kind of work that's invisible when it goes right and very visible when it doesn't.",
    "Outside of work, you'll find me reading, climbing badly, and slowly losing my battle against an ever-growing list of side projects.",
  ],
  email: "hello@alitadayoni.com",
  resumeUrl: "/resume.pdf",
  location: "Toronto, Canada",
  avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=600&fit=crop",
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "X", url: "https://x.com/", icon: "twitter" },
    { name: "Email", url: "mailto:hello@alitadayoni.com", icon: "mail" },
  ],
};
