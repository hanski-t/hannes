"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../ui/SocialLinks";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24"
    >
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-12">
        {/* Profile Image Placeholder - replace with actual Image component when photo is available */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 md:mb-0"
        >
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-muted ring-2 ring-border md:h-40 md:w-40">
            <span className="text-4xl font-bold text-muted-foreground md:text-5xl">
              HT
            </span>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Hannes Täyrönen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-muted-foreground md:text-xl"
          >
            Great to meet you, I&apos;m Hannes. Building things, breaking things, figuring it out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <SocialLinks iconSize="lg" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
