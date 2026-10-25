// English is the main language and lives at the root ("/", "/think").
// Finnish pages live under "/fi" ("/fi", "/fi/think").
export type Lang = "en" | "fi";

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "fi" : "en";
}

// "/think" → "/fi/think" for Finnish, unchanged for English
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/fi" : `/fi${path}`;
}

// Which language a URL path belongs to, and the same page in the other language
export function langFromPath(pathname: string): Lang {
  return pathname === "/fi" || pathname.startsWith("/fi/") ? "fi" : "en";
}

export function switchLangPath(pathname: string): string {
  if (langFromPath(pathname) === "fi") return pathname.slice(3) || "/";
  return localePath("fi", pathname);
}

export function formatDate(date: string, lang: Lang): string {
  return new Date(date).toLocaleDateString(lang === "fi" ? "fi-FI" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // Dates are written as "2026-10-15" (UTC midnight), so format in UTC to avoid showing the previous day
    timeZone: "UTC",
  });
}

export const dictionary = {
  en: {
    siteDescription:
      "Builder, engineer, explorer of the world. Building things, breaking things, figuring it out.",
    tags: ["builder", "engineer", "explorer"],
    tagline: ["Building things, breaking things.", "Figuring it out as I go."],
    currently: {
      label: "currently",
      items: [
        "exploring Southeast Asia",
        "building stuff",
        "looking for what to do next...",
        "open to new roles from early 2027",
      ],
    },
    interests: {
      label: "interested in",
      items: ["ai · energy · hard tech · health & longevity"],
    },
    lastUpdated: "last updated · Oct 2026",
    think: "Think",
    thinkDescription: "Thoughts on building, life, and everything in between.",
    thinkQuote:
      "Welcome to my corner of the internet. This is where I'll share thoughts on building, life, and everything in between.",
    moreThoughts: "What else is on your mind?",
    about: "About",
    home: "Home",
    noPosts: "No posts yet.",
    backToPosts: "Back to all posts",
    minRead: (minutes: number) => `${minutes} min read`,
    onlyInOtherLang: "This post is only available in Finnish.",
    originallyOnLinkedIn: "Originally published on LinkedIn",
    postNotFound: "Post not found",
    toggleTheme: "Toggle light and dark mode",
  },
  // Finnish is written to sound natural, not translated word for word
  fi: {
    siteDescription:
      "Tekijä, insinööri ja seikkailija. Kokeilen, teen ja välillä epäonnistun. Selvitän loput matkan varrella.",
    tags: ["tekijä", "insinööri", "seikkailija"],
    tagline: ["Kokeilen, teen ja välillä epäonnistun.", "Selvitän loput matkan varrella."],
    currently: {
      label: "parhaillaan",
      items: [
        "reissaan Kaakkois-Aasiassa",
        "kehittelen omia projekteja",
        "mietin, mitä seuraavaksi...",
        "avoin uusille työmahdollisuuksille alkuvuodesta 2027",
      ],
    },
    interests: {
      label: "kiinnostuksen kohteet",
      items: ["tekoäly · energia · hard tech · terveys ja pitkäikäisyys"],
    },
    lastUpdated: "päivitetty lokakuussa 2026",
    think: "Ajatuksia",
    thinkDescription: "Ajatuksia tekemisestä, elämästä ja kaikesta siltä väliltä.",
    thinkQuote:
      "Tervetuloa omaan nurkkaukseeni internetissä. Täällä jaan ajatuksia tekemisestä, elämästä ja kaikesta siltä väliltä.",
    moreThoughts: "Mitä muuta mielessä?",
    about: "Minusta",
    home: "Etusivu",
    noPosts: "Ei vielä kirjoituksia.",
    backToPosts: "Kaikki kirjoitukset",
    minRead: (minutes: number) => `lukuaika ${minutes} min`,
    onlyInOtherLang: "Tämä kirjoitus on vain englanniksi.",
    originallyOnLinkedIn: "Julkaistu alun perin LinkedInissä",
    postNotFound: "Kirjoitusta ei löytynyt",
    toggleTheme: "Vaihda teemaa",
  },
};
