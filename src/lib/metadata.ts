import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const SITE_DESCRIPTION =
  "Ali Tadayoni is a Frontend Engineer with 2+ years of experience building SaaS, cloud infrastructure, and web applications. Experienced in React, Next.js, TypeScript, Vue.js-to-React migrations, and production-grade testing workflows.";

const OG_IMAGE = `${profile.siteUrl}/og.png`;

type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
  isHome?: boolean;
};

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  isHome = false,
}: PageMetaInput): Metadata {
  const url = `${profile.siteUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [OG_IMAGE],
      ...(isHome && { siteName: "alitadayoni.com", locale: "en_US" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
