"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/lib/sections";

export function BuildSection() {
  const [expanded, setExpanded] = useState(false);

  const preview = sections.slice(0, 2);
  const rest = sections.slice(2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.65 }}
      className="py-10 border-t border-border/30"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-sm font-mono text-muted-foreground">Build</h2>
        <div className="flex items-center gap-0.5">
          {[1,1,0,1,1,0,1,0,1,1,0,1].map((filled, i) => (
            <span
              key={i}
              className={`inline-block h-2.5 w-2.5 rounded-sm ${filled ? "bg-accent/70" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {preview.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="group"
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium text-foreground">{section.title}</span>
              <span className="text-sm text-muted-foreground">{section.shortDescription}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-4 space-y-4">
              {rest.map((section) => (
                <motion.div
                  key={section.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">{section.title}</span>
                    <span className="text-sm text-muted-foreground">{section.shortDescription}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer"
      >
        <span>{expanded ? "That's enough to work with" : "What else have you built?"}</span>
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
