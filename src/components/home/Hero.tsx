"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../ui/SocialLinks";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 pb-10 md:pt-20 md:pb-12"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="name-glow text-6xl font-bold tracking-tight lg:text-7xl"
      >
        Hannes Täyrönen
      </motion.h1>

      {/* Keyword tags */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="mt-4 flex items-center gap-5"
      >
        {["builder", "founder", "explorer"].map((tag) => (
          <span key={tag} className="font-mono text-sm text-muted-foreground">
            [{tag}]
          </span>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="mt-6 max-w-lg"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Building things, breaking things.
          <br />
          Figuring it out as I go.
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.45 }}
        className="mt-6"
      >
        <SocialLinks iconSize="lg" />
      </motion.div>
    </motion.section>
  );
}
