import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { dictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "fi",
  path: "/",
  description: dictionary.fi.siteDescription,
});

export default function Home() {
  return <HomePage lang="fi" />;
}
