import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

const FEATURED_SLUGS = [
  "the-wild-oasis-website",
  "bonmano-coffee-shop",
  "the-wild-oasis-admin-dashboard",
];

export function Projects() {
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is (typeof projects)[number] => Boolean(p),
  );

  return (
    <section className="mt-32">
      <SectionHeading title="Projects." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-x-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary-color dark:hover:text-primary-color transition-colors"
        >
          See all projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
