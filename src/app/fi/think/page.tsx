import { Metadata } from "next";
import { ThinkPage } from "@/components/pages/ThinkPage";
import { dictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "fi",
  path: "/think",
  title: dictionary.fi.think,
  description: dictionary.fi.thinkDescription,
});

export default function Think() {
  return <ThinkPage lang="fi" />;
}
