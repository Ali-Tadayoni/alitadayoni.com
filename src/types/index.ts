export type Social = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "instagram";
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  bio: string;
  longBio: string[];
  email: string;
  resumeUrl: string;
  location: string;
  avatarUrl: string;
  socials: Social[];
};

export type Job = {
  company: string;
  role: string;
  url?: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  logo: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
};

export type Skill = {
  name: string;
  description: string;
  url: string;
  icon: string;
};

export type Hero = {
  name: string;
  role: string;
  url: string;
  met: boolean;
};

export type NavLink = {
  label: string;
  href: string;
};
