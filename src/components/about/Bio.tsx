import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Slide } from "@/components/shared/Slide";
import { SpotlightLinkButton } from "@/components/shared/SpotlightButton";
import { profile } from "@/data/profile";

export function Bio() {
  return (
    <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="order-2 lg:order-none">
        <Slide>
          <h1 className="font-incognito mb-8 basis-1/2 text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-tight">
            👋 Hey! I&apos;m {profile.name}.
          </h1>

          <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Slide>
      </div>

      <div className="order-none mb-12 flex flex-col gap-y-8 justify-self-center lg:order-1 lg:sticky lg:top-10 lg:self-start">
        <Slide delay={0.1}>
          <div>
            <Image
              className="mb-6 max-h-96 min-h-96 rounded-2xl bg-top object-cover"
              src={profile.avatarUrl}
              width={400}
              height={400}
              quality={100}
              alt={profile.name}
              priority
            />

            <div className="flex flex-col gap-y-4">
              <SpotlightLinkButton href={profile.resumeUrl} download className="w-full">
                Download Resume
                <Download className="h-4 w-4" />
              </SpotlightLinkButton>

              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-x-2.5 text-zinc-700 dark:text-zinc-300">
                  <span className="relative inline-flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-color opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-color" />
                  </span>
                  Open to work{" "}
                </span>
                <Link
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-x-2 truncate text-zinc-600 hover:text-primary-color dark:text-zinc-400"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {profile.email}
                </Link>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
