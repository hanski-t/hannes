import { Metadata } from "next";
import { Container } from "@/components/layout";
import { Gallery } from "@/components/life";
import { GalleryItem } from "@/types/gallery";
import galleryData from "../../../content/gallery.json";

export const metadata: Metadata = {
  title: "Life",
  description: "Photos, adventures, sports, and meaningful moments.",
};

export default function LifePage() {
  const galleryItems = galleryData as GalleryItem[];

  return (
    <Container size="wide" className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Life</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Moments & memories — sports, adventures, and the things that matter.
        </p>
      </div>

      <Gallery items={galleryItems} />
    </Container>
  );
}
