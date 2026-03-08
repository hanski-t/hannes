import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
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
            logo="/logos/pukkiluuri.png"
            logoSize="sm"
            title="Founder"
            company="PukkiLuuri.fi"
            period="Dec 2025 · 1 mo"
            description="Built a Finnish-speaking AI Santa phone line in three weeks, which was featured in major media in Finland."
          />
          <ExperienceItem
            logo="/logos/stealth_startup.jpg"
            logoSize="sm"
            title="Founder"
            company="Stealth Startup"
            period="Mar 2025 – Sep 2025 · 7 mos"
            description="Built solutions to utilize used EV batteries."
          />
          <ExperienceItem
            logo="/logos/antler.png"
            logoSize="wide"
            title="Residency & Scouting Intern"
            company="Antler · Internship · Helsinki"
            period="Aug 2024 – Dec 2024 · 5 mos"
            description="Helped Founder Residency teams and founders build their startups. Supported with operational affairs and executed ad-hoc tasks."
          />
          <ExperienceItem
            logo="/logos/forward_accelerator.png"
            logoSize="wide"
            logoDark
            title="Head of Forward Accelerator"
            company="Forward Accelerator · Full-time · Lappeenranta"
            period="Jan 2024 – Jun 2024 · 6 mos"
            description="Building a leading student-run idea accelerator in Finland."
          />
          <ExperienceItem
            logo="/logos/lutes.png"
            logoSize="wide"
            title="Partnerships & Funds Manager | Vice President"
            company="LUT Entrepreneurship Society (LUTES) · Full-time · Lappeenranta"
            period="Jan 2023 – Dec 2023 · 1 yr"
            description="Securing the funding of LUTES and maintaining partner relations with stakeholders. Developing the connections to the South Karelian and Finnish-wide startup ecosystem."
          />
          <ExperienceItem
            logo="/logos/tier.png"
            logoSize="wide"
            title="Mechanic"
            company="TIER Mobility · Part-time · Lappeenranta"
            period="Apr 2022 – Sep 2022 · 6 mos"
            description="Repairing and servicing electric scooters and bikes."
          />
          <ExperienceItem
            logo="/logos/stora_enso.jpg"
            logoSize="sm"
            title="Process Worker"
            company="Stora Enso · Full-time · Imatra"
            period="May 2022 – Aug 2022 · 4 mos"
            description="Operating cardboard machine's length cutter."
          />
          <ExperienceItem
            logo="/logos/family_businesses.jpg"
            logoSize="sm"
            title="Jack-Of-All-Trades"
            company="Family Businesses · Seasonal · Finland"
            period="2014 – 2021 · 7 yrs"
            description="During my teenage years, I worked at my family's companies, which spanned forestry, construction, gardening, bioenergy, and everything else that needed to be done in the countryside."
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <div className="space-y-6">
          <EducationItem
            logo="/logos/lut_university.png"
            logoSize="wide"
            degree="Master of Technology, Industrial Engineering and Management"
            school="LUT University"
            period="Aug 2024 – 2026"
          />
          <EducationItem
            logo="/logos/lut_university.png"
            logoSize="wide"
            degree="Bachelor of Technology, Energy Technology"
            school="LUT University"
            period="Aug 2021 – May 2024"
            description="Major: Energy Technology"
          />
          <EducationItem
            logo="/logos/kangasala_high_school.jpg"
            logoSize="wide"
            degree="Secondary school graduate"
            school="Kangasala High School"
            period="Aug 2017 – Mar 2020"
          />
        </div>
      </section>

      {/* Volunteering */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Volunteering</h2>
        <div className="space-y-6">
          <ExperienceItem
            logo="/logos/slush.png"
            logoSize="wide"
            title="Speaker Buddy"
            company="Slush"
            period="Nov 2025 · 1 mo"
            description="Contributing to the best startup event in the world."
          />
          <ExperienceItem
            logo="/logos/junction.png"
            logoSize="wide"
            title="Event Help Team Lead"
            company="Junction"
            period="Jul 2024 – Nov 2024 · 5 mos"
            description="Helped to build the world's biggest hackathon."
          />
          <ExperienceItem
            logo="/logos/mimir_fellows.webp"
            logoSize="wide"
            title="Lappeenranta Batch Participant"
            company="MIMIR Fellows"
            period="May 2023 – Feb 2024 · 10 mos"
            description="Participated in a week-long intensive entrepreneurship course and visited the startup scene in Nairobi."
          />
          <ExperienceItem
            logo="/logos/arctic_startup.png"
            logoSize="sm"
            title="Event Help Volunteer"
            company="ArcticStartup"
            period="May 2023 – Jun 2023 · 2 mos"
          />
          <ExperienceItem
            logo="/logos/slush.png"
            logoSize="wide"
            title="Partner Buddy Volunteer, Nokia"
            company="Slush"
            period="Sep 2022 – Nov 2022 · 3 mos"
          />
          <ExperienceItem
            logo="/logos/lut_invest.png"
            logoSize="sm"
            title="Founding Contributor | Board Member | Social Media Producer"
            company="LUT Invest"
            period="Feb 2022 – Dec 2022 · 11 mos"
          />
          <ExperienceItem
            logo="/logos/lutes.png"
            logoSize="wide"
            title="Events Team Member"
            company="LUT Entrepreneurship Society (LUTES)"
            period="Jan 2022 – Dec 2022 · 1 yr"
          />
          <ExperienceItem
            logo="/logos/armatuuri.png"
            logoSize="sm"
            title="Business Relations Officer"
            company="Armatuuri"
            period="Jan 2022 – Dec 2022 · 1 yr"
          />
          <ExperienceItem
            logo="/logos/slush.png"
            logoSize="wide"
            title="Construction Volunteer"
            company="Slush"
            period="Oct 2021 – Dec 2021 · 3 mos"
          />
          <ExperienceItem
            logo="/logos/finnish_defence_forces.png"
            logoSize="sm"
            title="Medic / Military Police"
            company="Finnish Defence Forces"
            period="Jul 2020 – Mar 2021 · 9 mos"
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
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hannes.hanski@gmail.com"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <Mail className="h-4 w-4" />
                hannes.hanski@gmail.com
              </a>
              <a
                href="tel:+358447415499"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <Phone className="h-4 w-4" />
                +358 44 741 5499
              </a>
            </div>
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

type LogoSize = "sm" | "wide";

function Logo({
  src,
  alt,
  size,
  dark,
}: {
  src: string;
  alt: string;
  size: LogoSize;
  dark?: boolean;
}) {
  const containerClass =
    size === "wide"
      ? "mt-0.5 h-10 w-20 shrink-0"
      : "mt-0.5 h-10 w-10 shrink-0";

  return (
    <div
      className={`${containerClass} overflow-hidden rounded-md flex items-center justify-center p-1 ${
        dark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

function ExperienceItem({
  logo,
  logoSize = "sm",
  logoDark,
  title,
  company,
  period,
  description,
}: {
  logo?: string;
  logoSize?: LogoSize;
  logoDark?: boolean;
  title: string;
  company: string;
  period: string;
  description?: string;
}) {
  return (
    <div className="flex gap-4">
      {logo ? (
        <Logo src={logo} alt={company} size={logoSize} dark={logoDark} />
      ) : (
        <div className="mt-0.5 h-10 w-10 shrink-0 rounded-md border border-border bg-muted/40" />
      )}
      <div className="flex-1 border-l-2 border-border pl-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-accent">{company}</p>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

function EducationItem({
  logo,
  logoSize = "sm",
  degree,
  school,
  period,
  description,
}: {
  logo?: string;
  logoSize?: LogoSize;
  degree: string;
  school: string;
  period: string;
  description?: string;
}) {
  return (
    <div className="flex gap-4">
      {logo ? (
        <Logo src={logo} alt={school} size={logoSize} />
      ) : (
        <div className="mt-0.5 h-10 w-10 shrink-0 rounded-md border border-border bg-muted/40" />
      )}
      <div className="flex-1 border-l-2 border-border pl-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-medium">{degree}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-accent">{school}</p>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
