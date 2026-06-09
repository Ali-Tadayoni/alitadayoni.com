import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/shared/PageHeading";
import { Slide } from "@/components/shared/Slide";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "A small collection of photos I've taken.",
};

export default function PhotosPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Photos"
        description="A small collection of photos I've taken."
      />

      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {photos.map((photo, i) => (
            <Image
              key={i}
              src={photo.src}
              alt={photo.alt}
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg rounded-md object-cover"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
