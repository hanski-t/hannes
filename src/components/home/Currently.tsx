"use client";

import { motion } from "framer-motion";

// Update these items (and the date) whenever things change
const lastUpdated = "Oct 2026";
const groups = [
  {
    label: "currently",
    items: [
      "exploring Southeast Asia",
      "building stuff",
      "looking for what to do next...",
    ],
  },
  {
    label: "interested in",
    items: ["ai · energy · hard tech · health & longevity"],
  },
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
        {groups.map((group) => (
          <div key={group.label} className="space-y-3">
            <div>
              <span className="text-accent">{">"}</span>{" "}
              <span className="text-foreground/60">{group.label}</span>
            </div>
            <ul className="space-y-1.5 pl-4">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="shrink-0 text-muted-foreground/40">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="pl-4 text-muted-foreground/40 pt-1">
          last updated · {lastUpdated}{" "}
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </motion.section>
  );
}
