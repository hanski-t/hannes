import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { dictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/",
  description: dictionary.en.siteDescription,
});

export default function Home() {
  return <HomePage lang="en" />;
}
