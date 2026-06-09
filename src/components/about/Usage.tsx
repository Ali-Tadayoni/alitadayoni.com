import Link from "next/link";
import { skills } from "@/data/skills";

export function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited to.
        </p>
      </div>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill.name}>
            <Link
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-baseline gap-x-3 group"
            >
              <span className="dark:text-primary-color text-secondary-color">›</span>
              <span className="font-incognito font-semibold group-hover:underline">
                {skill.name}
              </span>
              <span className="dark:text-zinc-400 text-zinc-600 text-sm">
                — {skill.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
