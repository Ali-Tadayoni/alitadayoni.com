const gradientText =
  "bg-linear-to-r from-primary-color to-tertiary-color bg-clip-text text-transparent";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-12 flex flex-col md:mb-16 ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-incognito mt-3 text-4xl font-bold tracking-tight md:text-5xl ${gradientText}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
