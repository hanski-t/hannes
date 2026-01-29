import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { useMDXComponents } from "../../../../mdx-components";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    if (!post.frontmatter.published) {
      notFound();
    }

    const components = useMDXComponents({});

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

        {/* Post content */}
        <article className="prose-custom">
          <MDXRemote source={post.content} components={components} />
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
  } catch {
    notFound();
  }
}
