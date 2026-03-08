import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hanski-t",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hannes-tayronen/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/Hannes_Tayronen",
    icon: XIcon,
  },
];

export function SocialLinks({ className, iconSize = "md" }: SocialLinksProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label={link.name}
        >
          <link.icon className={sizes[iconSize]} />
        </a>
      ))}
    </div>
  );
}
