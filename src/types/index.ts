export type Social = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "instagram";
};

export type Profile = {
  name: string;
  shortName: string;
  siteUrl: string;
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

export type CompanyLabelSegment = {
  text: string;
  url?: string;
};

export type Job = {
  company: string;
  companyLabel?: CompanyLabelSegment[];
  role: string;
  url?: string;
  logo: string;
  date: string;
  bullets: string[];
};

import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
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
  url: string;
};

export type NavLink = {
  label: string;
  href: string;
};
