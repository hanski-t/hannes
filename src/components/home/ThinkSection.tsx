"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Post } from "@/types/post";

interface ThinkSectionProps {
  posts: (Post & { readingTime: string })[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostRow({ post }: { post: Post & { readingTime: string } }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
      <Link href={`/think/${post.slug}`} className="group flex items-baseline justify-between gap-4 py-1">
        <span className="font-medium text-foreground group-hover:text-accent transition-colors">
          {post.frontmatter.title}
        </span>
        <span className="shrink-0 text-sm text-muted-foreground">
          {formatDate(post.frontmatter.date)}
        </span>
      </Link>
    </motion.div>
  );
}

export function ThinkSection({ posts }: ThinkSectionProps) {
  const [expanded, setExpanded] = useState(false);

  if (posts.length === 0) return null;

  const preview = posts.slice(0, 2);
  const rest = posts.slice(2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.73 }}
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
          <PostRow key={post.slug} post={post} />
        ))}
      </div>

      <AnimatePresence>
        {expanded && rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-3 space-y-3">
              {rest.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {(rest.length > 0) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors cursor-pointer"
        >
          <span>{expanded ? "Okay, I'll stop there" : "What else is on your mind?"}</span>
          <span
            className="inline-block transition-transform duration-300"
            style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            →
          </span>
        </button>
      )}
    </motion.section>
  );
}
