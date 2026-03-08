"use client";

import { motion } from "framer-motion";

// Update these items quarterly
const currentItems = [
  "Building hannestayronen.com (you're looking at it)",
  "Exploring AI tools and new ways of working",
  "Always looking for the next adventure",
];

export function Currently() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-12"
    >
      <div className="rounded-lg border border-border bg-muted/50 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Currently</h2>
          <span className="text-xs text-muted-foreground">Updated Q1 2026</span>
        </div>

        <ul className="mt-4 space-y-3">
          {currentItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
