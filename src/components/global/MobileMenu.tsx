"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, FolderGit2, FileText } from "lucide-react";
import { profile } from "@/data/profile";

const ICONS = {
  "/about": User,
  "/projects": FolderGit2,
  "/blog": FileText,
} as const;

import { navLinks } from "@/data/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <>
      <button
        onClick={toggle}
        aria-label="Open menu"
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <Menu className="text-xl h-5 w-5" />
      </button>

      <div
        className={`md:hidden fixed left-0 top-0 z-50 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={toggle} className="font-incognito font-bold text-2xl">
            {profile.shortName}
            <span className="text-primary-color">.</span>
          </Link>
          <button
            onClick={toggle}
            aria-label="Close menu"
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !open ? "-rotate-[360deg]" : ""
            }`}
          >
            <X className="text-xl h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col mt-6">
          {navLinks.map((link) => {
            const Icon = ICONS[link.href as keyof typeof ICONS];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggle}
                className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
              >
                {Icon && <Icon className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300 h-5 w-5" />}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
