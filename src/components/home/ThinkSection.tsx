"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "@/types/post";
import { formatDate } from "@/lib/utils";

interface ThinkSectionProps {
  posts: (Post & { readingTime: string })[];
}

const PREVIEW_COUNT = 2;

export function ThinkSection({ posts }: ThinkSectionProps) {
  if (posts.length === 0) return null;

  const preview = posts.slice(0, PREVIEW_COUNT);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.65 }}
      className="py-10 border-t border-border/30"
    >
      <h2 className="text-sm font-mono text-muted-foreground mb-6">Think</h2>

      {posts[0]?.frontmatter.description && (
        <blockquote className="mb-6 border-l-2 border-accent pl-4 text-lg text-foreground leading-snug">
          {posts[0].frontmatter.description}
        </blockquote>
      )}

      <div className="space-y-3">
        {preview.map((post) => (
          <motion.div key={post.slug} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            <Link href={`/think/${post.slug}`} className="group flex items-baseline justify-between gap-4 py-1">
              <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                {post.frontmatter.title}
              </span>
              <span className="shrink-0 text-sm text-muted-foreground">
                {formatDate(post.frontmatter.date)}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {posts.length > PREVIEW_COUNT && (
        <Link
          href="/think"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <span>What else is on your mind?</span>
          <span>→</span>
        </Link>
      )}
    </motion.section>
  );
}
