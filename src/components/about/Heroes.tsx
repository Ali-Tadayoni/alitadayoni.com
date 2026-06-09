import Link from "next/link";
import { Check } from "lucide-react";
import { Slide } from "@/components/shared/Slide";
import { heroes } from "@/data/heroes";

export function Heroes() {
  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          A small list of people whose work has shaped how I think about engineering, design, and
          the web. <strong className="font-semibold">&ldquo;In no particular order&rdquo;</strong>
        </p>
      </Slide>

      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
        {heroes.map((hero) => (
          <li
            key={hero.name}
            className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1"
          >
            {hero.met ? (
              <span
                title="Met in person"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-color/20 text-primary-color"
              >
                <Check className="h-3 w-3" />
              </span>
            ) : (
              <span className="inline-flex h-5 w-5 items-center justify-center text-zinc-400">·</span>
            )}
            <Link
              href={hero.url}
              target="_blank"
              rel="noreferrer"
              className={`font-incognito tracking-wide hover:underline ${
                hero.met ? "dark:text-green-300 text-green-800" : ""
              }`}
            >
              {hero.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
