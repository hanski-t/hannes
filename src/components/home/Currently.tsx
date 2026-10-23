"use client";

import { motion } from "framer-motion";
import { Lang, dictionary } from "@/lib/i18n";

// The items (and the date) live in src/lib/i18n.ts, update them there whenever things change
export function Currently({ lang }: { lang: Lang }) {
  const t = dictionary[lang];
  const groups = [t.currently, t.interests];

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
          {t.lastUpdated}{" "}
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </motion.section>
  );
}
