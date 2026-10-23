import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { dictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  description: dictionary.fi.siteDescription,
};

export default function Home() {
  return <HomePage lang="fi" />;
}