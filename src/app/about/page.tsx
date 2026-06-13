import type { Metadata } from "next";
import { Slide } from "@/components/shared/Slide";
import { Bio } from "@/components/about/Bio";
import { Tools } from "@/components/about/Tools";
import { TechStack } from "@/components/about/TechStack";
import { Heroes } from "@/components/about/Heroes";
import { Acknowledgements } from "@/components/about/Acknowledgements";
import { profile } from "@/data/profile";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `About | ${profile.name}`,
  description: "Learn more about my background, skills, and the work I focus on as a frontend engineer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      <Bio />
      <Slide delay={0.14}>
        <Tools />
      </Slide>
      <TechStack />
      <Heroes />
      <Acknowledgements />
    </main>
  );
}
