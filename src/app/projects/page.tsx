import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeading } from "@/components/shared/PageHeading";
import { Slide } from "@/components/shared/Slide";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `Projects | ${profile.name}`,
  description: "Explore projects built by Ali Tadayoni.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="Things I've built in my free time — to learn, experiment, and explore."
      />

      <Slide delay={0.1}>
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i === 0} />
          ))}
        </section>

        <div className="mb-16 flex justify-center">
          <Link
            href="https://github.com/Ali-Tadayoni/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-x-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary-color dark:hover:text-primary-color transition-colors"
          >
            View more on GitHub
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Slide>
    </main>
  );
}
