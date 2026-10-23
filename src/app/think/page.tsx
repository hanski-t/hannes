import { Metadata } from "next";
import { ThinkPage } from "@/components/pages/ThinkPage";
import { dictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/think",
  title: dictionary.en.think,
  description: dictionary.en.thinkDescription,
});

export default function Think() {
  return <ThinkPage lang="en" />;
}
