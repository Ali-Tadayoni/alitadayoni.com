import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Slide } from "@/components/shared/Slide";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <Link
                href={project.liveUrl ?? "#"}
                target={project.liveUrl ? "_blank" : undefined}
                rel="noreferrer"
                aria-disabled={!project.liveUrl}
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.liveUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <ExternalLink className="h-4 w-4" /> {project.liveUrl ? "Live URL" : "Coming Soon"}
              </Link>

              <Link
                href={project.repoUrl ?? "#"}
                target={project.repoUrl ? "_blank" : undefined}
                rel="noreferrer"
                aria-disabled={!project.repoUrl}
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.repoUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <Github className="h-4 w-4" /> {project.repoUrl ? "GitHub" : "No Repo"}
              </Link>
            </div>
          </div>

          <div
            className="relative flex aspect-16/10 w-full items-center justify-center overflow-hidden rounded-xl"
            style={{ backgroundColor: project.bgColor }}
          >
            <Image
              src={project.image}
              alt={project.name}
              placeholder="blur"
              sizes="(min-width: 768px) 768px, 100vw"
              className="h-[72%] w-auto object-contain drop-shadow-lg"
              priority
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <p>{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full dark:bg-primary-bg bg-zinc-100 px-3 py-1 text-xs dark:text-zinc-300 text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </main>
  );
}
