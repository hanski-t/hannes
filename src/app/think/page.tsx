import { Metadata } from "next";
import { Container } from "@/components/layout";
import { PostList } from "@/components/think";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Think",
  description: "Writing and reflections on building, technology, and life.",
};

export default function ThinkPage() {
  const posts = getAllPosts();

  return (
    <Container size="narrow" className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Think</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Writing & reflections — on building, technology, and life.
        </p>
      </div>

      <PostList posts={posts} />
    </Container>
  );
}
