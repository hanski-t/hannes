import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "../../../../mdx-components";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Returns null when there's no post file for this slug
function loadPost(slug: string) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = loadPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = loadPost(slug);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  return (
    <Container size="narrow" className="py-16">
      {/* Back link */}
      <Link
        href="/think"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      {/* Post header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {post.frontmatter.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-muted-foreground">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Cover picture */}
      {post.frontmatter.image && (
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
          <Image
            src={post.frontmatter.image}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Post content */}
      <article>
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      {/* Post footer */}
      <footer className="mt-16 border-t border-border pt-8">
        <Link
          href="/think"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </footer>
    </Container>
  );
}
