import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
