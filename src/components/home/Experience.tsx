import Image from "next/image";
import Link from "next/link";
import { experience } from "@/data/experience";
import type { Job } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";

const gradientText =
  "bg-gradient-to-r from-primary-color to-tertiary-color bg-clip-text text-transparent";

export function Experience() {
  return (
    <section className="mt-32">
      <SectionHeading eyebrow="What I have done so far" title="Work Experience." />

      <div className="relative mx-auto grid max-w-5xl grid-cols-[2.5rem_1fr] gap-x-6 gap-y-12 md:grid-cols-[1fr_3rem_1fr] md:gap-x-4 md:gap-y-16">
        <div
          aria-hidden
          className="timeline-axis col-start-1 mx-auto h-full w-0.5 rounded-full text-zinc-400 dark:text-zinc-500 md:col-start-2"
          style={{ gridRow: `1 / span ${experience.length}` }}
        />

        {experience.map((job, i) => (
          <ExperienceRow key={job.company + job.role} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({ job, index }: { job: Job; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* Marker on axis */}
      <Link
        href={job.url ?? "#"}
        target="_blank"
        rel="noreferrer"
        aria-label={job.company}
        className="z-10 col-start-1 row-start-[var(--row)] -mt-2 grid h-12 w-12 place-items-center justify-self-center rounded-full border-2 border-primary-color bg-white p-2 shadow-md transition-transform hover:scale-110 dark:bg-zinc-900 md:col-start-2"
        style={{ ["--row" as string]: index + 1 }}
      >
        <Image
          src={job.logo}
          alt={job.company}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </Link>

      {/* Desktop: date opposite the card, hidden on mobile */}
      <div
        className={`hidden text-sm text-zinc-500 dark:text-zinc-400 md:flex md:items-start md:pt-3 ${
          isLeft ? "md:col-start-3 md:justify-start" : "md:col-start-1 md:justify-end"
        }`}
        style={{ ["--row" as string]: index + 1, gridRow: index + 1 }}
      >
        {job.date}
      </div>

      {/* Card */}
      <div
        className={`timeline-story col-start-2 md:col-start-1 ${
          isLeft ? "md:col-start-1" : "md:col-start-3"
        }`}
        style={{ gridRow: index + 1 }}
      >
        <ExperienceCard job={job} />
      </div>
    </>
  );
}

function ExperienceCard({ job }: { job: Job }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-secondary-bg p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-primary-bg">
      <h3
        className={`font-incognito text-2xl font-bold tracking-tight ${gradientText}`}
      >
        {job.role}
      </h3>

      {job.companyLabel ? (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {job.companyLabel.map((seg, i) =>
            seg.url ? (
              <Link
                key={i}
                href={seg.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-primary-color dark:hover:text-primary-color"
              >
                {seg.text}
              </Link>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>
      ) : (
        <Link
          href={job.url ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-zinc-600 transition-colors hover:text-primary-color dark:text-zinc-400 dark:hover:text-primary-color"
        >
          {job.company}
        </Link>
      )}

      <ul className="mt-5 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-x-2">
            <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-zinc-500 dark:bg-zinc-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400 md:hidden">
        {job.date}
      </p>
    </article>
  );
}
