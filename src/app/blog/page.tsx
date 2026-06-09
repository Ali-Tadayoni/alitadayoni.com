import type { Metadata } from "next";
import { PageHeading } from "@/components/shared/PageHeading";
import { EmptyState } from "@/components/shared/EmptyState";
import { Slide } from "@/components/shared/Slide";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and writing.",
};

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Notes, ideas, and the occasional long-form piece."
      />
      <Slide delay={0.1}>
        <EmptyState
          title="No posts yet"
          message="There is no blog posts yet for that section"
        />
      </Slide>
    </main>
  );
}
