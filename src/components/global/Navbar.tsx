import Link from "next/link";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Navbar() {
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
