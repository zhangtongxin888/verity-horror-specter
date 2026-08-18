import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./_components/SiteShell";
import { GAME, SITE_URL } from "./_data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Verity Horror Guide — Beginner Walkthrough & Wiki", template: "%s | Verity Horror Guide" },
  description: "A fact-checked beginner guide for Verity [HORROR] by Specter Development, with a quick start, core loop, progression path, common mistakes, and FAQ.",
  applicationName: "Verity Horror Field Guide",
  category: "games",
  keywords: ["Verity Horror", "Verity Roblox", "Verity beginner guide", "Specter Development"],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0c0b",
  width: "device-width",
  initialScale: 1,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verity Horror Field Guide",
  url: SITE_URL,
  description: `Independent beginner guide for ${GAME.name} by ${GAME.developer}.`,
  about: {
    "@type": "VideoGame",
    name: GAME.name,
    gamePlatform: "Roblox",
    author: { "@type": "Organization", name: GAME.developer },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to guide</a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
