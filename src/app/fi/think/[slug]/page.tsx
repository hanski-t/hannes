import { Metadata } from "next";
import { PostPage, postMetadata, postStaticParams } from "@/components/pages/PostPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = postStaticParams;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return postMetadata("fi", slug);
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  return <PostPage lang="fi" slug={slug} />;
}