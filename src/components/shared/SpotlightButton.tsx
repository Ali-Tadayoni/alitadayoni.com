"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, PointerEvent, ReactNode } from "react";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "text-zinc-950 bg-primary-color shadow-[0_1px_2px_0_rgba(14,18,27,0.24),0_0_0_1px_var(--color-secondary-color)] hover:shadow-[0_2px_8px_0_rgba(51,224,146,0.35),0_0_0_1px_var(--color-secondary-color)]",
  secondary:
    "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-primary-bg border border-zinc-200 dark:border-zinc-700",
};

const baseClass =
  "spotlight-btn group/btn relative inline-flex h-11 items-center justify-center gap-x-2 overflow-hidden rounded-md px-5 text-sm font-incognito font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950";

function handleMove(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

function handleEnter(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  e.currentTarget.style.setProperty("--spot-opacity", "1");
}

function handleLeave(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--spot-opacity", "0");
}

type LinkProps = BaseProps & {
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
};

export function SpotlightLinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: LinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClass} ${variants[variant]} ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-x-2">{children}</span>
    </Link>
  );
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button">;

export function SpotlightButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-x-2">{children}</span>
    </button>
  );
}
