import type { Metadata } from "next";

export const SITE_URL = "https://verityhorror.wiki";

export const GAME = {
  name: "Verity [HORROR]",
  developer: "Specter Development",
  placeId: "129839966867899",
  universeId: "10514488908",
  created: "July 16, 2026",
  updatedChecked: "August 18, 2026",
  officialUrl: "https://www.roblox.com/games/129839966867899/Verity",
  groupId: "4466249",
} as const;

export const ROUTES = [
  { href: "/", label: "Beginner Hub", short: "Start here" },
  { href: "/quick-start", label: "Quick Start", short: "First run" },
  { href: "/core-loop", label: "Core Loop", short: "The rhythm" },
  { href: "/progression", label: "Progression", short: "What next" },
  { href: "/common-mistakes", label: "Common Mistakes", short: "Avoid traps" },
  { href: "/faq", label: "FAQ", short: "Clear answers" },
  { href: "/about-this-version", label: "About This Version", short: "Identity check" },
  { href: "/updates", label: "Verification Notes", short: "What changed" },
] as const;

export function makeMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Verity Horror Field Guide",
      title,
      description,
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Verity Horror Beginner Field Guide" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/og.png", alt: "Verity Horror Beginner Field Guide" }],
    },
  };
}
