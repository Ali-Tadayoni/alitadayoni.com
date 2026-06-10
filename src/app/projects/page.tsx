import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeading } from "@/components/shared/PageHeading";
import { Slide } from "@/components/shared/Slide";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of products, tools, and experiments I've worked on.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="A collection of products, tools, and experiments — some shipped, some still cooking."
      />

      <Slide delay={0.1}>
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
