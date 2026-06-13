import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Slide } from "@/components/shared/Slide";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { acknowledgements } from "@/data/acknowledgements";

export function Acknowledgements() {
  return (
    <section className="mt-32 mb-24">
      <SectionHeading
        title="Acknowledgements"
        description="Engineers and teammates whose guidance, feedback, and support played an important role in my growth during the early years of my career."
      />

      <Slide delay={0.1}>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {acknowledgements.map((person) => (
            <li key={person.name}>
              <Link
                href={person.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-x-4 rounded-xl border border-zinc-200 bg-secondary-bg p-5 backdrop-blur-sm transition-colors hover:border-primary-color/50 dark:border-zinc-800 dark:bg-primary-bg"
              >
                <div className="min-w-0">
                  <p className="font-incognito text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-primary-color dark:text-zinc-50">
                    {person.name}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-color" />
              </Link>
            </li>
          ))}
        </ul>
      </Slide>
    </section>
  );
}
