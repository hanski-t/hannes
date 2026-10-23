import type { MetadataRoute } from "next";
import { getPost, getPostLanguages, getPostSlugs } from "@/lib/mdx";
import { Lang, localePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

// Served at /sitemap.xml. Submit that URL in Google Search Console.

function languageLinks(path: string) {
  return {
    languages: {
      en: absoluteUrl(localePath("en", path)),
      fi: absoluteUrl(localePath("fi", path)),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages that exist in both languages
  const pages = ["/", "/think"].flatMap((path) =>
    (["en", "fi"] as Lang[]).map((lang) => ({
      url: absoluteUrl(localePath(lang, path)),
      lastModified: now,
      alternates: languageLinks(path),
    }))
  );

  // Posts: only the languages each post is written in. The other language's URL
  // shows the same text and points search engines here with a canonical link.
  const posts = getPostSlugs().flatMap((slug) => {
    const path = `/think/${slug}`;
    const languages = getPostLanguages(slug);

    return languages.map((lang) => {
      const { frontmatter } = getPost(slug, lang)!;
      return {
        url: absoluteUrl(localePath(lang, path)),
        lastModified: frontmatter.date,
        images: frontmatter.image ? [absoluteUrl(frontmatter.image)] : undefined,
        alternates: languages.length > 1 ? languageLinks(path) : undefined,
      };
    });
  });

  return [...pages, ...posts];
}
