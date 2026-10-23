import { Container } from "@/components/layout";
import { Hero, Currently, ThinkSection, AboutSection } from "@/components/home";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts } from "@/lib/mdx";
import { Lang, dictionary } from "@/lib/i18n";
import { SITE_NAME, SITE_URL, SOCIAL_URLS, absoluteUrl } from "@/lib/site";

export function HomePage({ lang }: { lang: Lang }) {
  const posts = getAllPosts(lang);

  return (
    <div lang={lang}>
      {/* Tells search engines who the site is about and links the social profiles to it */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              inLanguage: ["en", "fi"],
              publisher: { "@id": `${SITE_URL}/#person` },
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: SITE_NAME,
              url: SITE_URL,
              image: absoluteUrl("/about/hiking.jpg"),
              description: dictionary[lang].siteDescription,
              sameAs: Object.values(SOCIAL_URLS),
              alumniOf: { "@type": "CollegeOrUniversity", name: "LUT University" },
            },
          ],
        }}
      />
      <Container>
        <Hero lang={lang} />
        <Currently lang={lang} />
        <ThinkSection lang={lang} posts={posts} />
        <AboutSection lang={lang} />
        <div className="pb-16" />
      </Container>
    </div>
  );
}
