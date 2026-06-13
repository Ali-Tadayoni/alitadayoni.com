import type { Metadata } from "next";
import { PageHeading } from "@/components/shared/PageHeading";
import { EmptyState } from "@/components/shared/EmptyState";
import { Slide } from "@/components/shared/Slide";
import { profile } from "@/data/profile";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `Blog | ${profile.name}`,
  description: "Read latest stories from Ali Tadayoni's Blog.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading title="Blog" description="Notes, ideas, and the occasional long-form piece." />
      <Slide delay={0.1}>
        <EmptyState title="No posts yet" message="There are no blog posts yet." />
      </Slide>
    </main>
  );
}
