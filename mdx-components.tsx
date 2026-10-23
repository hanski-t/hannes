import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";

// Props are strings because posts can't contain JavaScript expressions
interface FigureProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  caption?: string;
}

// Plain object so server components (like the post page) can use it directly
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="mb-6 mt-10 text-3xl font-bold tracking-tight first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
  ),

  // Paragraphs and text
  p: ({ children }) => (
    <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 hover:text-accent/80"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? ""}
        className="text-accent underline underline-offset-4 hover:text-accent/80"
      >
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Code
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
      {children}
    </pre>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-accent pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: () => <hr className="my-8 border-border" />,

  // Images in the post text open as a full-size preview on top of the page when clicked
  img: ({ src, alt }) => (
    <span className="my-6 block">
      <ZoomableImage src={String(src)} alt={alt ?? ""} className="rounded-lg" />
    </span>
  ),

  // Picture with a caption, used in posts as:
  // <Figure src="/posts/..." alt="..." width="1348" height="1000" caption="..." />
  // Clicking it opens a full-size preview on top of the page.
  Figure: ({ src, alt, width, height, caption }: FigureProps) => (
    <figure className="my-8">
      <ZoomableImage
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
        className="h-auto w-full rounded-lg border border-border transition-opacity hover:opacity-90"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  ),
};

// Required by @next/mdx for .mdx pages
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
