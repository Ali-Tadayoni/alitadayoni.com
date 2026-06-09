import type { ReactNode } from "react";
import { Slide } from "./Slide";

type PageHeadingProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeading({ title, description, children }: PageHeadingProps) {
  return (
    <header className="mb-10">
      <Slide>
        <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </Slide>
    </header>
  );
}
