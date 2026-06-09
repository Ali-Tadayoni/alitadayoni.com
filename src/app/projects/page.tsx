import type { Metadata } from "next";
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
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </Slide>
    </main>
  );
}
