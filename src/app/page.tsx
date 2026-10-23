import { Container } from "@/components/layout";
import { Hero, Currently, ThinkSection, AboutSection } from "@/components/home";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <Container>
      <Hero />
      <Currently />
      <ThinkSection posts={posts} />
      <AboutSection />
      <div className="pb-16" />
    </Container>
  );
}
