export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  creatorUrl?: string;
  heroVideoId?: string;
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Windgate Wiki",
  shortName: "Windgate",
  logoText: "W",
  tagline: "Complete Guides, Building, Crafting & Resources",
  description: "Explore Windgate with guides to sandbox gameplay, resource gathering, tool upgrades, building, multiplayer worlds, community creation, and essential game information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://windgatewiki.top",
  supportEmail: "support@windgatewiki.top",
  gameUrl: "https://www.roblox.com/games/3540051865/Windgate",
  creatorUrl: "https://www.roblox.com/users/1320922/profile",
  heroVideoId: "vAthAjR_hBs", // Windgate (Defaultio) gameplay video
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
