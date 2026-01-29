import { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout";
import { SocialLinks } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Hannes Täyrönen - builder, startup founder, and explorer.",
};

export default function AboutPage() {
  return (
    <Container size="narrow" className="py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">About</h1>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <div className="prose-custom space-y-4 text-muted-foreground">
          <p className="text-lg">
            I&apos;m Hannes — a builder, startup founder, and explorer based in
            [Location]. I&apos;m passionate about creating things that make the
            world a little better.
          </p>
          <p>
            My journey has taken me through startups, side projects, and
            adventures around the world. I believe in learning by doing, staying
            curious, and embracing the chaos of building something new.
          </p>
          <p>
            When I&apos;m not building, you can find me [hobby/interest 1],
            [hobby/interest 2], or planning the next adventure.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Experience</h2>
        <div className="space-y-6">
          <ExperienceItem
            title="Founder / Builder"
            company="Current Venture"
            period="2024 - Present"
            description="Building something new. More details coming soon."
          />
          <ExperienceItem
            title="Previous Role"
            company="Previous Company"
            period="2022 - 2024"
            description="Description of what you did and accomplished."
          />
          <ExperienceItem
            title="Earlier Role"
            company="Earlier Company"
            period="2020 - 2022"
            description="Description of earlier experience and growth."
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <div className="space-y-4">
          <EducationItem
            degree="Degree / Program"
            school="University Name"
            period="Year - Year"
          />
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">Get in Touch</h2>
        <div className="rounded-lg border border-border bg-muted/30 p-6">
          <p className="mb-4 text-muted-foreground">
            I&apos;m always interested in connecting with like-minded people.
            Feel free to reach out!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@meethannes.com"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail className="h-4 w-4" />
              hello@meethannes.com
            </a>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">or find me on</span>
              <SocialLinks iconSize="sm" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-border pl-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-accent">{company}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function EducationItem({
  degree,
  school,
  period,
}: {
  degree: string;
  school: string;
  period: string;
}) {
  return (
    <div className="border-l-2 border-border pl-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-medium">{degree}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-accent">{school}</p>
    </div>
  );
}
