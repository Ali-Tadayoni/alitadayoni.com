"use client";

import Image from "next/image";
import Link from "next/link";
import { TestTube2 } from "lucide-react";
import { useEffect } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { brandIcons } from "@/assets/brands";
import { techStack, type Tech } from "@/data/tech-stack";

// Evenly distributed hues so neighbouring cards never share a colour.
const HUE_STEP = 360 / techStack.length;

export function TechStack() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="mt-32">
      <SectionHeading
        eyebrow="What I build with"
        title="Tech Stack"
        description="Tools, technologies and gadgets I use on a daily basis but not limited to."
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, i) => (
          <li key={tech.name}>
            <TechCard tech={tech} hue={Math.round(i * HUE_STEP)} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function TechCard({ tech, hue }: { tech: Tech; hue: number }) {
  return (
    <Link
      href={tech.url}
      target="_blank"
      rel="noreferrer"
      style={{ ["--hue" as string]: hue }}
      className="spot-card flex items-center gap-4 rounded-xl border border-zinc-200 bg-secondary-bg p-4 backdrop-blur-sm transition-colors dark:border-zinc-800 dark:bg-primary-bg"
    >
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/60 dark:bg-zinc-900/60">
        {tech.icon ? (
          <Image
            src={brandIcons[tech.icon]}
            alt={tech.name}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        ) : (
          <TestTube2 className="h-6 w-6 text-primary-color" />
        )}
      </div>
      <div className="relative z-10 min-w-0">
        <h3 className="font-incognito text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {tech.name}
        </h3>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">{tech.description}</p>
      </div>
    </Link>
  );
}
