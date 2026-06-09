import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import type { Social } from "@/types";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
} as const;

export function SocialIcon({ social, className }: { social: Social; className?: string }) {
  const Icon = ICONS[social.icon];
  return <Icon className={className ?? "h-5 w-5"} aria-label={social.name} />;
}
