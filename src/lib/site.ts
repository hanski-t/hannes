// The site is served from www (the bare domain redirects there), so canonical
// URLs, the sitemap and structured data all use this address.
export const SITE_URL = "https://www.hannestayronen.com";
export const SITE_NAME = "Hannes Täyrönen";

export const SOCIAL_URLS = {
  github: "https://github.com/hanski-t",
  linkedin: "https://www.linkedin.com/in/hannes-tayronen/",
  x: "https://x.com/Hannes_Tayronen",
};

// Turns a site path like "/think" into a full URL
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
