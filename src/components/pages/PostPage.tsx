import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout";
import { getPost, getPostSlugs } from "@/lib/mdx";
import { Lang, dictionary, formatDate, localePath } from "@/lib/i18n";
import { mdxComponents } from "../../../mdx-components";

export function postStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function postMetadata(lang: Lang, slug: string): Metadata {
  const post = getPost(slug, lang);
  if (!post) return { title: dictionary[lang].postNotFound };

  const { title, description, image } = post.frontmatter;
  return {
    title,
    description,
    // A post with only one language version shows up under both languages' URLs,
    // so point search engines at the URL of the language it's written in
    alternates: { canonical: localePath(post.lang, `/think/${slug}`) },
    openGraph: { title, description, type: "article", images: image ? [image] : undefined },
  };
}

export function PostPage({ lang, slug }: { lang: Lang; slug: string }) {
  const t = dictionary[lang];
  const post = getPost(slug, lang);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  const { frontmatter } = post;
  const backHref = localePath(lang, "/think");

  return (
    <div lang={lang}>
      <Container size="narrow" className="py-16">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backToPosts}
        </Link>

        <article lang={post.lang}>
          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{frontmatter.title}</h1>
            <div lang={lang} className="mt-4 flex items-center gap-3 text-muted-foreground">
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date, lang)}</time>
              <span>&middot;</span>
              <span>{t.minRead(post.readingMinutes)}</span>
            </div>
            {post.lang !== lang && (
              <p lang={lang} className="mt-4 font-mono text-sm text-muted-foreground/70">
                {t.onlyInOtherLang}
              </p>
            )}
          </header>

          {frontmatter.image && (
            <figure className="mb-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.imageCaption ?? ""}
                  fill
                  priority
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
              {frontmatter.imageCaption && (
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {frontmatter.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToPosts}
          </Link>
          {frontmatter.linkedinUrl && (
            <a
              href={frontmatter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.originallyOnLinkedIn}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </footer>
      </Container>
    </div>
  );
}
