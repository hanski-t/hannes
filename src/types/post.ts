export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  image?: string; // optional cover picture, e.g. "/pictures/golden_gate_bridge.jpg"
  tags?: string[];
  published: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}
