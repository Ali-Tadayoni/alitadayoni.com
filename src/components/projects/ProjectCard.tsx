import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/shared/Badge";
import { SpotlightLinkButton } from "@/components/shared/SpotlightButton";

export function ProjectCard({ project }: { project: Project }) {
  const liveHref = project.liveUrl ?? "#";
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 transition-transform duration-300 ease-out hover:-translate-y-1">
      <Link
        href={liveHref}
        target={project.liveUrl ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={`${project.name} — live demo`}
        className="group block"
      >
        <div
          className="relative flex aspect-16/10 items-center justify-center overflow-hidden"
          style={{ backgroundColor: project.bgColor }}
        >
          <Image
            src={project.image}
            alt={project.name}
            placeholder="blur"
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
            className="h-[72%] w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <Link
          href={liveHref}
          target={project.liveUrl ? "_blank" : undefined}
          rel="noreferrer"
          className="group/title w-fit"
        >
          <h3 className="font-incognito text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover/title:underline underline-offset-4">
            {project.name}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {project.repoUrl && (
          <div className="mt-auto pt-2">
            <SpotlightLinkButton
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-full px-4 text-xs"
            >
              <Github className="h-4 w-4" />
              Source Code
            </SpotlightLinkButton>
          </div>
        )}
      </div>
    </article>
  );
}
