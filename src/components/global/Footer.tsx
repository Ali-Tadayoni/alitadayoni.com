import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { brandIcons } from "@/assets/brands";
import { profile } from "@/data/profile";

type BuiltWith = {
  name: string;
  url: string;
  lightIcon: StaticImageData;
  darkIcon: StaticImageData;
};

const builtWith: BuiltWith[] = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    lightIcon: brandIcons["nextjs-light"],
    darkIcon: brandIcons["nextjs-dark"],
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    lightIcon: brandIcons.tailwind,
    darkIcon: brandIcons.tailwind,
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    lightIcon: brandIcons["vercel-light"],
    darkIcon: brandIcons["vercel-dark"],
  },
];

export function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <div className="flex md:flex-row flex-col items-center gap-x-2">
          <h3 className="font-inter">Built with:</h3>
          <ul className="flex items-center gap-x-4 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
            {builtWith.map((tool) => (
              <li key={tool.name}>
                <Link
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
                >
                  <Image
                    src={tool.lightIcon}
                    alt={tool.name}
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain dark:hidden"
                  />
                  <Image
                    src={tool.darkIcon}
                    alt=""
                    aria-hidden
                    width={16}
                    height={16}
                    className="hidden h-4 w-4 object-contain dark:block"
                  />
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
          <small className="text-zinc-500">
            Copyright © {profile.name} {new Date().getFullYear()} All rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
