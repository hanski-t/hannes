export interface Section {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
}

export const sections: Section[] = [
  {
    id: "websites",
    title: "Websites",
    shortDescription:
      "Building digital products from scratch — portfolio sites, landing pages, and web tools.",
    description:
      "A collection of websites and web projects I've built. More details coming soon.",
  },
  {
    id: "events",
    title: "Events",
    shortDescription:
      "Producing and organizing events in the Finnish startup ecosystem — from hackathons to demo days.",
    description:
      "Events I've been involved in organizing or producing. More details coming soon.",
  },
  {
    id: "loop-energy",
    title: "LoopEnergy",
    shortDescription:
      "A startup building solutions to give used EV batteries a second life.",
    description:
      "LoopEnergy is a startup I co-founded focused on repurposing used electric vehicle batteries. More details coming soon.",
  },
  {
    id: "side-projects",
    title: "Side Projects",
    shortDescription:
      "Small experiments, tools, and ideas built for learning, fun, or because they seemed interesting.",
    description:
      "A collection of side projects and experiments. More details coming soon.",
  },
];

export function getSectionById(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
