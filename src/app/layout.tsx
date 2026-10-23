import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hannes Täyrönen",
    template: "%s | Hannes Täyrönen",
  },
  description: "Builder, startup founder, explorer of the world. Building things, breaking things, figuring it out.",
  metadataBase: new URL("https://hannestayronen.com"),
  openGraph: {
    title: "Hannes Täyrönen",
    description: "Builder, startup founder, explorer of the world.",
    url: "https://hannestayronen.com",
    siteName: "Hannes Täyrönen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannes Täyrönen",
    description: "Builder, startup founder, explorer of the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class on <html> before React loads
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <main className="flex-1 relative z-[1]">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
