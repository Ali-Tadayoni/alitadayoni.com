import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { brandIcons } from "@/assets/brands";
import { tools, type Tool } from "@/data/tools";

// Deterministic shuffles so SSR matches client. Each row uses all tools in a
// different order, so the two rows never line up on the same icon at once.
const ROW_A_ORDER = [0, 5, 2, 9, 7, 3, 11, 1, 8, 4, 10, 6];
const ROW_B_ORDER = [6, 1, 10, 4, 8, 11, 3, 7, 9, 2, 5, 0];

export function Tools() {
  const rowA = ROW_A_ORDER.map((i) => tools[i]);
  const rowB = ROW_B_ORDER.map((i) => tools[i]);

  return (
    <section className="mt-32">
      <SectionHeading
        eyebrow="What I use day-to-day"
        title="Tools And Platforms"
        description="Tools, technologies and gadgets I use on a daily basis but not limited to."
      />
      <div className="space-y-6">
        <MarqueeRow items={rowA} duration={55} />
        <MarqueeRow items={rowB} duration={55} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse,
}: {
  items: Tool[];
  duration: number;
  reverse?: boolean;
}) {
  // Repeat 4x so even on wide screens the track always overflows the viewport
  // and the -50% translate stays seamless with no empty gaps.
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32 dark:from-zinc-900"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32 dark:from-zinc-900"
      />
      <ul
        className={`marquee ${reverse ? "marquee--reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((tool, i) => (
          <li key={`${tool.name}-${i}`}>
            <Link
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              title={tool.name}
              className="group flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-200 bg-secondary-bg backdrop-blur-sm transition-colors hover:border-primary-color/50 hover:bg-zinc-100 sm:h-28 sm:w-28 dark:border-zinc-800 dark:bg-primary-bg dark:hover:bg-zinc-800/60"
            >
              <Image
                src={brandIcons[tool.icon]}
                alt={tool.name}
                width={56}
                height={56}
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
