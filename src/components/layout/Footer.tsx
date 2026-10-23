"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";
import { Lang, dictionary, langFromPath, switchLangPath } from "@/lib/i18n";

const LANGS: Lang[] = ["en", "fi"];

export function Footer() {
  const pathname = usePathname();
  const lang = langFromPath(pathname);
  const { resolvedTheme, setTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-[1] border-t border-border/30 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Hannes Täyrönen
          </p>

          <div className="flex items-center gap-5">
            <SocialLinks iconSize="sm" />

            <span className="h-4 w-px bg-border" aria-hidden="true" />

            {/* Language: the current one is plain text, the other links to the same page in that language */}
            <div className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
              {LANGS.map((l, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {l === lang ? (
                    <span className="text-foreground" aria-current="true">
                      {l.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      href={switchLangPath(pathname)}
                      hrefLang={l}
                      className="transition-colors hover:text-foreground"
                    >
                      {l.toUpperCase()}
                    </Link>
                  )}
                </span>
              ))}
            </div>

            {/* Both icons are rendered and CSS shows the right one, so server and browser HTML match */}
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label={dictionary[lang].toggleTheme}
              className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            >
              <Sun className="hidden h-4 w-4 dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
