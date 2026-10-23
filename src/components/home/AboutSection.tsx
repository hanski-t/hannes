"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.73 }}
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
    </motion.section>
  );
}
