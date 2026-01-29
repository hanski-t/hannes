export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: "sports" | "travel" | "achievements" | "moments";
  date?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}
