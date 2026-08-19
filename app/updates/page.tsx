import Link from "@/components/StaticLink";
import { CautionNote, FactNote, GuidePage } from "../_components/GuidePage";
import { GAME, makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror Verification Notes — Sources & Updates",
  "See when and how this independent Verity [HORROR] guide verified its game identity, controls, premise, badge names, and current content limits.",
  "/updates",
);

export default function UpdatesPage() {
  return (
    <GuidePage
      index="06 / 06"
      eyebrow="Verification notes · Dated source checks"
      title="What we checked—and what we did not."
      intro="This page records the evidence boundary behind the guide. It is a compact change log for readers who want to know why a claim appears, changes, or stays unpublished."
      related={["/about-this-version", "/quick-start", "/faq"]}
    >
      <h2>August 18, 2026 check</h2>
      <ul>
        <li>Confirmed Place {GAME.placeId} maps to Universe {GAME.universeId}.</li>
        <li>Confirmed the creator is the Roblox group {GAME.developer}, group {GAME.groupId}.</li>
        <li>Confirmed the experience creation timestamp falls on {GAME.created}.</li>
        <li>Checked the official description for the Ethan, mysterious box, yellow-sphere Verity, and three-day prepare-and-protect premise.</li>
        <li>Checked the official PC, Xbox, and PlayStation run/interact controls.</li>
        <li>Checked six enabled official badges and their displayed names.</li>
        <li>Separated this target from Verity [REALISTIC] using its different developer, Place ID, and Universe ID.</li>
      </ul>
      <FactNote><p>The experience title was advertising a new ending during this check. Titles and update labels are treated as changing information; the IDs remain the guide’s identity anchor.</p></FactNote>

      <h2>Claims held back pending better evidence</h2>
      <p>The following details were found on third-party pages but were not supported by the target experience’s public description or official badge metadata:</p>
      <ul>
        <li>Specific vehicle repair steps or item counts.</li>
        <li>Jobs, money, shops, upgrades, or named defenses.</li>
        <li>Fixed tasks for each day.</li>
        <li>Exact good-ending or bad-ending routes.</li>
        <li>House layout, enemy logic, and chase triggers.</li>
      </ul>
      <CautionNote><p>“Not published” does not mean “impossible.” It means the public evidence checked for this guide did not prove the detail for the current target build.</p></CautionNote>

      <h2>How to use dated guide content</h2>
      <p>Start with the <Link href="/quick-start">Quick Start</Link>. If the live experience no longer matches a documented control, badge name, or story statement, treat the live build as the newest signal and use this page’s date to understand the gap.</p>
    </GuidePage>
  );
}
