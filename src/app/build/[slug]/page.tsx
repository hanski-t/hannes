import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { sections, getSectionById } from "@/lib/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sections.map((section) => ({ slug: section.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionById(slug);
  if (!section) return {};
  return {
    title: section.title,
    description: section.shortDescription,
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSectionById(slug);

  if (!section) notFound();

  return (
    <Container size="narrow" className="py-16">
      <div className="mb-2">
        <Link
          href="/build"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Build
        </Link>
      </div>

      <div className="mb-12 mt-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {section.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {section.shortDescription}
        </p>
      </div>

      <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
        <p className="text-muted-foreground">More details coming soon.</p>
      </div>
    </Container>
  );
}
