"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "@/types/post";
import { Lang, dictionary, formatDate, localePath } from "@/lib/i18n";

interface ThinkSectionProps {
  lang: Lang;
  posts: Post[];
}

const PREVIEW_COUNT = 2;

export function ThinkSection({ lang, posts }: ThinkSectionProps) {
  if (posts.length === 0) return null;

  const t = dictionary[lang];
  const preview = posts.slice(0, PREVIEW_COUNT);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.65 }}
      className="py-10 border-t border-border/30"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-6">{t.think}</h2>

      <blockquote className="mb-6 border-l-2 border-accent pl-4 text-lg text-foreground leading-snug">
        {t.thinkQuote}
      </blockquote>

      <div className="space-y-3">
        {preview.map((post) => (
          <motion.div key={post.slug} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            <Link
              href={localePath(lang, `/think/${post.slug}`)}
              className="group flex items-baseline justify-between gap-4 py-1"
            >
              <span lang={post.lang} className="font-medium text-foreground group-hover:text-accent transition-colors">
                {post.frontmatter.title}
              </span>
              <span className="shrink-0 text-sm text-muted-foreground">
                {formatDate(post.frontmatter.date, lang)}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {posts.length > PREVIEW_COUNT && (
        <Link
          href={localePath(lang, "/think")}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <span>{t.moreThoughts}</span>
          <span>→</span>
        </Link>
      )}
    </motion.section>
  );
}
