"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/types/post";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post & { readingTime: string };
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/think/${post.slug}`}
        className="group block rounded-lg border border-border p-6 transition-all hover:border-accent/50 hover:bg-muted/30"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold group-hover:text-accent">
            {post.frontmatter.title}
          </h2>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        <p className="mt-3 text-muted-foreground">
          {post.frontmatter.description}
        </p>

        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.article>
  );
}
