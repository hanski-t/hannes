import { Container } from "@/components/layout";
import { Hero, Currently, ThinkSection, AboutSection } from "@/components/home";
import { getAllPosts } from "@/lib/mdx";
import { Lang } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Lang }) {
  const posts = getAllPosts(lang);

  return (
    <div lang={lang}>
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
