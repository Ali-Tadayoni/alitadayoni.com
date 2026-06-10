import type { Metadata } from "next";
import { Slide } from "@/components/shared/Slide";
import { Bio } from "@/components/about/Bio";
import { Tools } from "@/components/about/Tools";
import { TechStack } from "@/components/about/TechStack";
import { Heroes } from "@/components/about/Heroes";

export const metadata: Metadata = {
  title: "About",
  description: "A short introduction to who I am and what I work on.",
};

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      <Bio />
      <Slide delay={0.14}>
        <Tools />
      </Slide>
      <TechStack />
      <Heroes />
    </main>
  );
}
