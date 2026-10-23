"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../ui/SocialLinks";
import { Lang, dictionary } from "@/lib/i18n";

const asciiStyle = {
  fontFamily: "'Courier New', Courier, monospace",
  fontSize: "9px",
  lineHeight: 1.15,
  margin: 0,
  whiteSpace: "pre",
  letterSpacing: 0,
} as const;

// ANSI Shadow lettering. The two rows above TÄYRÖNEN are the umlaut dots over Ä and Ö.
const ASCII_FIRST = `██╗  ██╗ █████╗ ███╗   ██╗███╗   ██╗███████╗███████╗
██║  ██║██╔══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝
███████║███████║██╔██╗ ██║██╔██╗ ██║█████╗  ███████╗
██╔══██║██╔══██║██║╚██╗██║██║╚██╗██║██╔══╝  ╚════██║
██║  ██║██║  ██║██║ ╚████║██║ ╚████║███████╗███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝`;

const ASCII_LAST = `          ██╗ ██╗                  ██╗ ██╗
          ╚═╝ ╚═╝                  ╚═╝ ╚═╝
████████╗ █████╗ ██╗   ██╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗
╚══██╔══╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║
   ██║   ███████║ ╚████╔╝ ██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║
   ██║   ██╔══██║  ╚██╔╝  ██╔══██╗██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║
   ██║   ██║  ██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║███████╗██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝`;

export function Hero({ lang }: { lang: Lang }) {
  const t = dictionary[lang];

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
        className="name-glow"
        aria-label="Hannes Täyrönen"
      >
        {/* Phones: plain text, the ASCII art is too wide */}
        <span className="ascii-name font-mono text-3xl font-bold tracking-tight sm:hidden">
          Hannes Täyrönen
        </span>
        <div className="hidden sm:flex flex-col md:flex-row md:items-end md:gap-6" aria-hidden="true">
          <pre className="ascii-name" style={asciiStyle}>{ASCII_FIRST}</pre>
          <pre className="ascii-name" style={asciiStyle}>{ASCII_LAST}</pre>
        </div>
      </motion.h1>

      {/* Keyword tags */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="mt-4 flex items-center gap-5"
      >
        {t.tags.map((tag) => (
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
          {t.tagline[0]}
          <br />
          {t.tagline[1]}
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
