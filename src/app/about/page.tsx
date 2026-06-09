import type { Metadata } from "next";
import { Slide } from "@/components/shared/Slide";
import { Bio } from "@/components/about/Bio";
import { Usage } from "@/components/about/Usage";
import { Heroes } from "@/components/about/Heroes";

export const metadata: Metadata = {
  title: "About",
  description: "A short introduction to who I am and what I work on.",
};

export default function AboutPage() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <Bio />
      <Slide delay={0.14}>
        <Usage />
      </Slide>
      <Heroes />
    </main>
  );
}
