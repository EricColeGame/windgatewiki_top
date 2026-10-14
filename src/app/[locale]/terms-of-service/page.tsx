import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Windgate is an open-world sandbox game that is still evolving. Gameplay systems, items, building mechanics, and update details may change without notice, so always verify important information in-game or through official Roblox channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Defaultio or Roblox property.</p>
      <p>Questions about these terms can be sent to <a className="text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
