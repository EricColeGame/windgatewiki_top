import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Windgate Wiki is an independent, fan-built guide hub for Windgate, the open-world multiplayer sandbox game created by Defaultio on Roblox. It covers resource gathering, tool upgrades, building, crafting, multiplayer worlds, and community creation for new and veteran players alike.</p>
      <p>The site is not affiliated with Defaultio, the Windgate development team, or Roblox. All game names, artwork, and trademarks belong to their respective owners.</p>
      <p>Spotted a mistake or want to suggest a guide? Contact us at <a className="text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
