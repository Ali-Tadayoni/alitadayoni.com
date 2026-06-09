import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
    >
      <div className="grid place-items-center dark:bg-zinc-800 bg-zinc-100 rounded-md min-h-[60px] min-w-[60px] text-2xl">
        <span aria-hidden>{project.logo}</span>
      </div>

      <div>
        <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
        <div className="text-sm dark:text-zinc-400 text-zinc-600">{project.tagline}</div>
      </div>
    </Link>
  );
}
