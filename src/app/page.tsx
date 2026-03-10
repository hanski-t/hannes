import { Container } from "@/components/layout";
import { Hero, Currently, BuildSection, ThinkSection, AboutSection, LifeSection } from "@/components/home";
import { getAllPosts } from "@/lib/mdx";
import galleryData from "../../content/gallery.json";

export default function Home() {
  const posts = getAllPosts();
  const gallery = galleryData as Array<{
    id: string;
    src: string;
    alt: string;
    category: string;
    aspectRatio: "landscape" | "square" | "portrait";
  }>;

  return (
    <Container>
      <Hero />
      <Currently />
      <BuildSection />
      <ThinkSection posts={posts} />
      <AboutSection />
      <LifeSection gallery={gallery} />
      <div className="pb-16" />
    </Container>
  );
}
