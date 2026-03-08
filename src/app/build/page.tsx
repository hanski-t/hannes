import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { sections } from "@/lib/sections";

export const metadata: Metadata = {
  title: "Build",
  description: "Projects, startups, and things I've made.",
};

export default function BuildPage() {
  return (
    <Container size="narrow" className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Build</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Things I&apos;ve made and worked on — organized by area.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/build/${section.id}`}
            className="group flex items-center justify-between gap-6 rounded-lg border border-border bg-muted/30 p-6 transition-all hover:border-accent/50 hover:bg-muted/50"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {section.shortDescription}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </Container>
  );
}
