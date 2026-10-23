import { Lang } from "@/lib/i18n";

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  image?: string; // optional cover picture, shown at the top of the post
  imageCaption?: string;
  linkedinUrl?: string; // set when the post was first published on LinkedIn
  tags?: string[];
  published: boolean;
}

export interface Post {
  slug: string;
  lang: Lang; // language this version is written in
  frontmatter: PostFrontmatter;
  content: string;
  readingMinutes: number;
}
