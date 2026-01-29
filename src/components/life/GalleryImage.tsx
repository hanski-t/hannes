"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryItem } from "@/types/gallery";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

export function GalleryImage({ item, index, onClick }: GalleryImageProps) {
  const [imageError, setImageError] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-lg bg-muted",
        aspectClasses[item.aspectRatio || "square"]
      )}
    >
      {imageError ? (
        // Placeholder when image fails to load
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <div className="text-center">
            <span className="text-4xl font-bold text-muted-foreground/30">
              {index + 1}
            </span>
            <p className="mt-2 text-xs text-muted-foreground/50">
              {item.category}
            </p>
          </div>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

      {/* Alt text on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-sm text-white">{item.alt}</p>
        {item.category && (
          <span className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs text-white/80">
            {item.category}
          </span>
        )}
      </div>
    </motion.button>
  );
}
