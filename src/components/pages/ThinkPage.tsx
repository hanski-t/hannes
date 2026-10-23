import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { getAllPosts } from "@/lib/mdx";
import { Lang, dictionary, formatDate, localePath } from "@/lib/i18n";

// All posts, newest first: just the title and the date
export function ThinkPage({ lang }: { lang: Lang }) {
  const t = dictionary[lang];
  const posts = getAllPosts(lang);

  return (
    <div lang={lang}>
      <Container size="narrow" className="py-16">
        <Link
          href={localePath(lang, "/")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.home}
        </Link>

        <h1 className="mt-10 mb-6 text-sm font-mono text-muted-foreground">{t.think}</h1>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">{t.noPosts}</p>
        ) : (
          <ul className="divide-y divide-border/30">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={localePath(lang, `/think/${post.slug}`)}
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span
                    lang={post.lang}
                    className="font-medium text-foreground transition-colors group-hover:text-accent"
                  >
                    {post.frontmatter.title}
                  </span>
                  <time
                    dateTime={post.frontmatter.date}
                    className="shrink-0 text-sm text-muted-foreground"
                  >
                    {formatDate(post.frontmatter.date, lang)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
