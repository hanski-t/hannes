"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-lg border border-border bg-muted/30 p-6 transition-all hover:border-accent/50 hover:bg-muted/50"
    >
      {/* Project Image Placeholder */}
      {project.image ? (
        <div className="mb-4 aspect-video overflow-hidden rounded-md bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mb-4 flex aspect-video items-center justify-center rounded-md bg-muted">
          <span className="text-2xl font-bold text-muted-foreground/50">
            {project.name.charAt(0)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-foreground">{project.name}</h3>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-2 py-1 text-xs",
                "bg-accent/10 text-accent"
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Visit</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
