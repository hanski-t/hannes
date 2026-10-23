import { Metadata } from "next";
import { ThinkPage } from "@/components/pages/ThinkPage";
import { dictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dictionary.en.think,
};

export default function Think() {
  return <ThinkPage lang="en" />;
}