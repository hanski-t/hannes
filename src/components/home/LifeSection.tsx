"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: "landscape" | "square" | "portrait";
}

interface LifeSectionProps {
  gallery: GalleryItem[];
}

const previewRotations = [-2, 1.5, -1];

function GalleryThumb({ item, rotation = 0 }: { item: GalleryItem; rotation?: number }) {
  return (
    <div
      className="h-40 md:h-48 flex-1 min-w-0 overflow-hidden rounded-md bg-muted transition-transform duration-300 ease-out"
      style={{ transform: `rotate(${rotation}deg)` }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = `rotate(${rotation}deg)`; }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
    </div>
  );
}

export function LifeSection({ gallery }: LifeSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const preview = gallery.slice(0, 3);
  const rest = gallery.slice(3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.89 }}
      className="py-10 border-t border-border/30"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-6">Life</h2>

      <div className="flex gap-3">
        {preview.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.06 }}
            className="flex-1 min-w-0"
          >
            <GalleryThumb item={item} rotation={previewRotations[i]} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-3 flex gap-3">
              {rest.map((item) => (
                <div key={item.id} className="flex-1 min-w-0">
                  <GalleryThumb item={item} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer"
      >
        <span>{expanded ? "Nice, that's enough" : "What else do you get up to?"}</span>
        <span
          className="inline-block transition-transform duration-300"
          style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          →
        </span>
      </button>
    </motion.section>
  );
}
