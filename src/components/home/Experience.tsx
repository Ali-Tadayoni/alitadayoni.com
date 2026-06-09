import Image from "next/image";
import Link from "next/link";
import { Slide } from "@/components/shared/Slide";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {experience.map((job) => (
            <div
              key={job.company + job.startDate}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <Link
                href={job.url ?? "#"}
                target={job.url ? "_blank" : undefined}
                rel="noreferrer"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  src={job.logo}
                  width={50}
                  height={50}
                  alt={job.company}
                  className="object-cover duration-300 rounded-sm"
                />
              </Link>

              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p>{job.role}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {job.startDate} —{" "}
                  {job.endDate.toLowerCase() === "present" ? (
                    <span className="dark:text-primary-color text-tertiary-color">Present</span>
                  ) : (
                    job.endDate
                  )}
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
