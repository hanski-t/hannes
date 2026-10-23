import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Think",
  description: "Thoughts on building, life, and everything in between.",
};

export default function ThinkPage() {
  const posts = getAllPosts();

  return (
    <Container size="narrow" className="py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Link>

      <h1 className="mt-10 mb-6 text-sm font-mono text-muted-foreground">Think</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-border/30">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/think/${post.slug}`} className="group flex gap-4 py-5">
                {post.frontmatter.image && (
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={post.frontmatter.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {post.frontmatter.title}
                    </h2>
                    <time
                      dateTime={post.frontmatter.date}
                      className="shrink-0 text-sm text-muted-foreground"
                    >
                      {formatDate(post.frontmatter.date)}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {post.frontmatter.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
