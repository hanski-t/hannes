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
      "Builder, startup founder, explorer of the world. Building things, breaking things, figuring it out.",
    tags: ["builder", "founder", "explorer"],
    tagline: ["Building things, breaking things.", "Figuring it out as I go."],
    currently: {
      label: "currently",
      items: ["exploring Southeast Asia", "building stuff", "looking for what to do next..."],
    },
    interests: {
      label: "interested in",
      items: ["ai · energy · hard tech · health & longevity"],
    },
    lastUpdated: "last updated · Oct 2026",
    think: "Think",
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
  fi: {
    siteDescription:
      "Rakentaja, yrittäjä ja seikkailija. Rakennan ja rikon asioita ja opin matkan varrella.",
    tags: ["rakentaja", "yrittäjä", "seikkailija"],
    tagline: ["Rakennan ja rikon asioita.", "Opin matkan varrella."],
    currently: {
      label: "tällä hetkellä",
      items: ["kiertämässä Kaakkois-Aasiaa", "rakentamassa juttuja", "etsimässä, mitä tehdä seuraavaksi..."],
    },
    interests: {
      label: "kiinnostuksen kohteet",
      items: ["tekoäly · energia · hard tech · terveys & pitkäikäisyys"],
    },
    lastUpdated: "päivitetty · lokakuu 2026",
    think: "Ajatuksia",
    moreThoughts: "Mitä muuta mielessä?",
    about: "Minusta",
    home: "Etusivu",
    noPosts: "Ei vielä kirjoituksia.",
    backToPosts: "Takaisin kirjoituksiin",
    minRead: (minutes: number) => `${minutes} min lukuaika`,
    onlyInOtherLang: "Tämä kirjoitus on saatavilla vain englanniksi.",
    originallyOnLinkedIn: "Julkaistu alun perin LinkedInissä",
    postNotFound: "Kirjoitusta ei löytynyt",
    toggleTheme: "Vaihda vaalean ja tumman tilan välillä",
  },
};
