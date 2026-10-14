export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://windgatewiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/3540051865/Windgate",
  heroVideoId: "vAthAjR_hBs", // Windgate (Defaultio) gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
