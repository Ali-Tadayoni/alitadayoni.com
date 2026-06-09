import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";
import { Slide } from "@/components/shared/Slide";
import { profile } from "@/data/profile";

export function Bio() {
  return (
    <section className="relative grid lg:grid-cols-[1.2fr_1fr] grid-cols-1 gap-x-6 justify-items-center">
      <div className="order-2 lg:order-none">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
            I&apos;m {profile.name}. I live in {profile.location}, where I build things for the web.
          </h1>

          <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed space-y-4">
            {profile.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Slide>
      </div>

      <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
        <Slide delay={0.1}>
          <div className="sticky top-10">
            <Image
              className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
              src={profile.avatarUrl}
              width={400}
              height={400}
              quality={100}
              alt={profile.name}
              priority
            />

            <div className="flex flex-col text-center gap-y-4">
              <div className="flex items-center gap-x-3">
                <Link
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                >
                  View Résumé <ExternalLink className="text-base h-4 w-4" />
                </Link>
                <Link
                  href={profile.resumeUrl}
                  download
                  className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                >
                  <Download className="h-5 w-5" />
                </Link>
              </div>

              <Link
                href={`mailto:${profile.email}`}
                className="flex items-center gap-x-2 hover:text-primary-color justify-center"
              >
                <Mail className="text-lg h-5 w-5" />
                {profile.email}
              </Link>
            </div>
          </div>
        </Slide>
      </aside>
    </section>
  );
}
