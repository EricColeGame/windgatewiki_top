import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Windgate, Roblox, and all related game names, logos, artwork, and media belong to their respective owners, including Defaultio and Roblox Corporation.</p>
      <p>Windgate Wiki is a non-official fan wiki written by players for informational and guide purposes. Screenshots and quoted material are used for commentary and reference only.</p>
      <p>If you own the rights to content displayed here and have a concern, contact the site operator at <a className="text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review or removal.</p>
    </LegalPage>
  );
}
