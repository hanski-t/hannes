import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostFrontmatter } from "@/types/post";
import { Lang, otherLang } from "@/lib/i18n";

// Posts are named <slug>.<lang>.mdx, e.g. hello-world.en.mdx. A post can have
// an English version, a Finnish version, or both. Both share the same slug (URL).
const postsDirectory = path.join(process.cwd(), "content/posts");
const POST_FILE = /^(.+)\.(en|fi)\.mdx$/;

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const slugs = fs
    .readdirSync(postsDirectory)
    .map((file) => file.match(POST_FILE)?.[1])
    .filter((slug): slug is string => !!slug);

  return [...new Set(slugs)];
}

function readPost(slug: string, lang: Lang): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.${lang}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    slug,
    lang,
    frontmatter: data as PostFrontmatter,
    content,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

// Languages a post has a published version in
export function getPostLanguages(slug: string): Lang[] {
  return (["en", "fi"] as const).filter((lang) => readPost(slug, lang)?.frontmatter.published);
}

// The post in the requested language, or in the other one if that's the only version
export function getPost(slug: string, lang: Lang): Post | null {
  return readPost(slug, lang) ?? readPost(slug, otherLang(lang));
}

export function getAllPosts(lang: Lang): Post[] {
  return getPostSlugs()
    .map((slug) => getPost(slug, lang))
    .filter((post): post is Post => !!post && post.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
