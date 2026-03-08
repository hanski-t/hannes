import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder's Journey",
  description: "A browser game about the founder's journey, built as a course project.",
};

export default function FounderGamePage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex items-center gap-3 border-b border-border px-6 py-3">
        <Link
          href="/build/side-projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Side Projects
        </Link>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm font-medium">Founder&apos;s Journey</span>
      </div>

      <iframe
        src="https://game.hannestayronen.com"
        className="flex-1 w-full border-0"
        title="Founder's Journey Game"
        allow="fullscreen"
      />
    </div>
  );
}
