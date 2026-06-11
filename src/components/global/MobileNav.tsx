"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <Menu className="text-xl h-5 w-5" />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open || undefined}
        className={`md:hidden fixed left-0 top-0 z-50 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Home">
            <span className="grid place-items-center h-[35px] w-[35px] rounded-md bg-primary-color text-zinc-900 font-incognito font-bold">
              {profile.shortName.charAt(0)}
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              open ? "" : "-rotate-[360deg]"
            }`}
          >
            <X className="text-xl h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-[var(--shadow-line-dark)] shadow-[var(--shadow-line-light)] p-6 group"
            >
              <span className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300">
                ›
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
