import { Slide } from "@/components/shared/Slide";
import { Social } from "@/components/shared/Social";
import { HeroIllustration } from "./HeroIllustration";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
      <div className="lg:max-w-2xl max-w-2xl">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            {profile.headline}
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {profile.bio}
          </p>
        </Slide>

        <Slide delay={0.1}>
          <Social />
        </Slide>
      </div>

      <Slide delay={0.14}>
        <HeroIllustration />
      </Slide>
    </section>
  );
}
