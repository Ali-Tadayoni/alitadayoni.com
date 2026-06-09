import Link from "next/link";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/global/SocialIcon";

export function Social() {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {profile.socials.map((s) => (
        <li key={s.name}>
          <Link
            href={s.url}
            target={s.icon === "mail" ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
          >
            <SocialIcon
              social={s}
              className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
            />
            &nbsp;{s.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
