export interface Section {
  id: string;
  title: string;
  period: string;
  shortDescription: string;
  description: string;
  href?: string; // external link, shown as the title link
}

export const sections: Section[] = [
  {
    id: "pukkiluuri",
    title: "PukkiLuuri",
    period: "Dec 2025",
    shortDescription:
      "A Finnish-speaking AI Santa you can call on an ordinary phone line. Built in three weeks and featured in major Finnish media.",
    description:
      "PukkiLuuri is an AI-powered phone line where kids can call Joulupukki and chat with him in Finnish or English. More details coming soon.",
    href: "https://pukkiluuri.fi",
  },
  {
    id: "loop-energy",
    title: "LoopEnergy",
    period: "2025",
    shortDescription:
      "A startup building solutions to give used EV batteries a second life.",
    description:
      "LoopEnergy is a startup I co-founded focused on repurposing used electric vehicle batteries. More details coming soon.",
  },
  {
    id: "founders-journey",
    title: "Founder's Journey",
    period: "Spring 2026",
    shortDescription:
      "A gothic startup adventure game you can play in the browser. Built for LUT's Game Development Project course.",
    description:
      "Founder's Journey is a browser game built as a course project at LUT University. More details coming soon.",
    href: "https://game.hannestayronen.com",
  },
  {
    id: "ponsai",
    title: "Ponsai",
    period: "Feb – May 2026",
    shortDescription: "A health AI agent built on top of OpenClaw.",
    description: "Ponsai is a health AI agent built on top of OpenClaw. More details coming soon.",
  },
];

export function getSectionById(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
