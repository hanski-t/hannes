"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  // Known for Figure pictures; markdown images in posts don't have them
  width?: number;
  height?: number;
  className?: string;
}

// A picture inside a post. Clicking it shows the full-size picture on top of
// the page; clicking anywhere or pressing Escape closes it.
export function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  // While open: Escape closes it and the page behind doesn't scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="block w-full cursor-zoom-in">
        {width && height ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 768px) 720px, 100vw"
            className={className}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className={className} />
        )}
      </button>

      {/* Rendered straight into <body> so nothing on the page (like the footer) can sit on top of it */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-h-full max-w-full rounded-lg object-contain shadow-2xl" />
            <button
              type="button"
              autoFocus
              aria-label="Close"
              className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-white/70 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
