import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hannestayronen",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hannestayronen",
    icon: Linkedin,
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
