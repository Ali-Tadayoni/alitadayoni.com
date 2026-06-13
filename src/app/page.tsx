import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { profile } from "@/data/profile";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `${profile.name} | ${profile.role}`,
  isHome: true,
});

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
