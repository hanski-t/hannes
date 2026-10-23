"use client";

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
            Olen Hannes, suomalainen <Highlight>rakentaja</Highlight>,{" "}
            <Highlight>startup-yrittäjä</Highlight> ja <Highlight>seikkailija</Highlight>.
            Haluan luoda asioita, jotka tekevät maailmasta vähän paremman paikan.
          </p>
          <p>
            Matkani on kulkenut startupien, sivuprojektien ja maailmalla seikkailun kautta. Uskon{" "}
            <Highlight>tekemällä oppimiseen</Highlight>, uteliaisuuteen ja siihen, että uuden
            rakentamisen kaaos kuuluu asiaan.
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
    </motion.section>
  );
}
