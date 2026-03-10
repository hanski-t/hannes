"use client";

import { motion } from "framer-motion";

// Update these items quarterly
const currentItems = [
  "building this website",
  "exploring AI tools and new ways of working",
  "looking for what's next",
];

export function Currently() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="pb-10"
    >
      <div className="font-mono text-sm text-muted-foreground space-y-3">
        <div>
          <span className="text-accent">{">"}</span>{" "}
          <span className="text-foreground/60">currently</span>
        </div>
        <ul className="space-y-1.5 pl-4">
          {currentItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="shrink-0 text-muted-foreground/40">↳</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pl-4 text-muted-foreground/40 pt-1">
          last updated · Q1 2026{" "}
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </motion.section>
  );
}
