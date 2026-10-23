"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lang, dictionary } from "@/lib/i18n";

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
}

export function AboutSection({ lang }: { lang: Lang }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.73 }}
      className="py-10 border-t border-border/30"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-6">{dictionary[lang].about}</h2>

      {lang === "fi" ? (
        <div className="space-y-3 text-muted-foreground">
          <p>
            Olen Hannes, <Highlight>rakentelija</Highlight>, <Highlight>startup-yrittäjä</Highlight> ja{" "}
            <Highlight>seikkailija</Highlight> Suomesta. Tykkään luoda asioita, jotka tekevät maailmasta
            vähän paremman.
          </p>
          <p>
            Matkan varrelle on mahtunut startuppeja, sivuprojekteja ja seikkailuja ympäri maailmaa. Uskon{" "}
            <Highlight>tekemällä oppimiseen</Highlight>, uteliaisuuteen ja siihen, että uuden rakentamiseen
            kuuluu aina vähän kaaosta.
          </p>
        </div>
      ) : (
        <div className="space-y-3 text-muted-foreground">
          <p>
            I&apos;m Hannes — <Highlight>a builder</Highlight>, <Highlight>startup founder</Highlight>, and{" "}
            <Highlight>explorer</Highlight> based in Finland. I&apos;m passionate about creating things that
            make the world a little better.
          </p>
          <p>
            My journey has taken me through startups, side projects, and adventures around the world. I
            believe in <Highlight>learning by doing</Highlight>, staying curious, and embracing the chaos of
            building something new.
          </p>
        </div>
      )}

      <Image
        src="/about/hiking.jpg"
        alt={lang === "fi" ? "Vaelluksella näköalapaikalla vuorten yllä" : "Hiking at a lookout high above the hills"}
        width={1000}
        height={1000}
        sizes="320px"
        className="mt-8 h-auto w-full max-w-xs rounded-lg"
      />
    </motion.section>
  );
}
