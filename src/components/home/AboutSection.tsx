"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "2", label: "startups founded" },
  { value: "5+", label: "years in ecosystems" },
  { value: "1", label: "AI Santa" },
  { value: "MSc", label: "in progress" },
];

const timeline = [
  {
    year: "2026",
    events: [
      "Building this site. Still figuring out what's next.",
    ],
  },
  {
    year: "2025",
    events: [
      "Founded PukkiLuuri — a Finnish-speaking AI Santa phone line, built in three weeks. Made national news.",
      "Co-founded LoopEnergy, a startup around used EV batteries. Seven months of building and learning.",
      "Speaker buddy at Slush — the world's best startup event.",
    ],
  },
  {
    year: "2024",
    events: [
      "Started a Master's in Industrial Engineering at LUT.",
      "Embedded inside Antler Helsinki's Founder Residency, helping early teams figure out what they were actually building.",
      "Led Forward Accelerator — a student-run startup program at LUT.",
      "Event Help Team Lead at Junction. Part of the team running the world's biggest hackathon.",
      "MIMIR Fellows batch — finished the program with a trip to the startup scene in Nairobi.",
    ],
  },
  {
    year: "2023",
    events: [
      "VP of LUT Entrepreneurship Society (LUTES). Responsible for partnerships and keeping the organization funded.",
      "Volunteered at ArcticStartup events and Slush.",
      "Started the MIMIR Fellows program.",
    ],
  },
  {
    year: "2022",
    events: [
      "Fixed electric scooters at TIER Mobility. Learned how physical products actually fail.",
      "Operated a cardboard machine at Stora Enso for a summer. Hot, loud, and weirdly satisfying.",
      "Events team at LUTES. Helped found LUT Invest as a board member.",
      "First business relations role at Armatuuri. Slush construction volunteer.",
    ],
  },
  {
    year: "2021",
    events: [
      "Started at LUT University (Energy Technology).",
      "Finished military service — medic and military police.",
      "First Slush volunteer stint.",
    ],
  },
  {
    year: "2017–2020",
    events: [
      "Kangasala High School.",
      "Seven years working in the family businesses — forestry, construction, bioenergy, and everything else the countryside needed. The real foundation.",
    ],
  },
];

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.81 }}
      className="py-10 border-t border-border/30"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-6">About</h2>

      <div className="space-y-3 text-muted-foreground">
        <p>
          I&apos;m Hannes —{" "}
          <span className="text-foreground font-medium">a builder</span>,{" "}
          <span className="text-foreground font-medium">startup founder</span>, and{" "}
          <span className="text-foreground font-medium">explorer</span>{" "}
          based in Finland. I&apos;m passionate about creating things that make the world a little better.
        </p>
        <p>
          My journey has taken me through startups, side projects, and adventures around the world. I believe in{" "}
          <span className="text-foreground font-medium">learning by doing</span>,
          staying curious, and embracing the chaos of building something new.
        </p>
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
            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-border/30 pb-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold tracking-tight">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Longer bio */}
            <div className="mt-8 space-y-3 text-muted-foreground max-w-prose">
              <p>
                I grew up in the Finnish countryside, spending my teenage years doing whatever the family businesses
                needed — forestry, construction, bioenergy. That&apos;s where I learned that real work is messy and
                satisfying in equal measure.
              </p>
              <p>
                I moved to Lappeenranta for university and got pulled into building things almost immediately: student
                societies, accelerator programs, events. I co-founded two startups, spent time inside Antler&apos;s
                founder residency in Helsinki, and ended up with a fairly unconventional path.
              </p>
              <p>
                I&apos;m still figuring out what&apos;s next. That part I&apos;m okay with.
              </p>
            </div>

            {/* Personal log timeline */}
            <div className="mt-10 space-y-7">
              {timeline.map((period) => (
                <div key={period.year} className="grid grid-cols-[3.5rem_1fr] gap-5">
                  <div className="text-xs font-mono text-muted-foreground/50 pt-0.5 text-right leading-relaxed">
                    {period.year}
                  </div>
                  <div className="space-y-1.5 border-l border-border/30 pl-4">
                    {period.events.map((event, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {event}
                      </p>
                    ))}
                  </div>
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
        <span>{expanded ? "Right, I think I get it" : "Tell me more about yourself"}</span>
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
