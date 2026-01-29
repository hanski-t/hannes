import { Metadata } from "next";
import { Container } from "@/components/layout";
import { ProjectGrid } from "@/components/build";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Build",
  description: "Projects, startups, and things I've made.",
};

export default function BuildPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Build</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Things I&apos;ve made — startups, side projects, experiments, and
          websites.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </Container>
  );
}
