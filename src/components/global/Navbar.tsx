"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative text-sm py-6 md:px-16 px-6 z-30 md:mb-28 mb-10 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[linear-gradient(to_right,transparent_5%,rgba(51,224,146,0.45)_25%,#33E092_50%,rgba(51,224,146,0.45)_75%,transparent_95%)] after:[box-shadow:0_0_8px_rgba(51,224,146,0.35)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex items-center">
          <span className="grid place-items-center h-[35px] w-[35px] rounded-md bg-primary-color text-zinc-900 font-incognito font-bold">
            {profile.shortName.charAt(0)}
          </span>
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
          >
            <Menu className="text-xl h-5 w-5" />
          </button>
        </div>
      </div>

      <div
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
    </header>
  );
}
