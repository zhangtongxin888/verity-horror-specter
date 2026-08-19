import Link from "@/components/StaticLink";
import { FactNote, GuidePage } from "../_components/GuidePage";
import { GAME, makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Which Verity Is This? — Specter Development Identity",
  "Verify the exact Verity [HORROR] covered by this guide: Specter Development, Place 129839966867899, Universe 10514488908, created July 16, 2026.",
  "/about-this-version",
);

export default function AboutVersionPage() {
  return (
    <GuidePage
      index="ID / RECORD"
      eyebrow="Version identity · Prevent mixed-game advice"
      title="This guide follows the IDs, not the title."
      intro="Roblox titles and update labels can change. The Place ID, Universe ID, and developer are the durable identity checks for the experience covered here."
      related={["/quick-start", "/common-mistakes", "/updates"]}
    >
      <h2>Verified target record</h2>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Horizontal table overflow needs a keyboard focus target. */}
      <div className="table-scroll" role="region" aria-label="Verified game identity record" tabIndex={0}>
      <table className="fact-table">
        <tbody>
          <tr><th>Experience</th><td>{GAME.name}</td></tr>
          <tr><th>Developer</th><td>{GAME.developer} · Roblox group {GAME.groupId}</td></tr>
          <tr><th>Place ID</th><td>{GAME.placeId}</td></tr>
          <tr><th>Universe ID</th><td>{GAME.universeId}</td></tr>
          <tr><th>Created</th><td>{GAME.created}</td></tr>
          <tr><th>Last guide check</th><td>{GAME.updatedChecked}</td></tr>
        </tbody>
      </table>
      </div>
      <FactNote><p>The official Roblox page and Games API agree on the Specter Development identity. Use the two IDs above whenever an article, video, or wiki might cover a different Verity.</p></FactNote>

      <h2>Known different experience</h2>
      <p><strong>Verity [REALISTIC]</strong> is not this guide’s target. Its verified Roblox record uses Place <strong>120944686522212</strong>, Universe <strong>10480747190</strong>, and the developer <strong>Fredbear Holds Neighbors</strong>.</p>
      <p>The project brief also requires separation from an Umek0 Games version. Public research did not produce a sufficiently reliable official Place/Universe match for that version, so this site does not publish guesses about its identity or gameplay.</p>

      <h2>Official source links</h2>
      <ul>
        <li><a href={GAME.officialUrl} rel="nofollow external">Target experience on Roblox ↗</a></li>
        <li><a href={"https://games.roblox.com/v1/games?universeIds=" + GAME.universeId} rel="nofollow external">Roblox Games API identity record ↗</a></li>
        <li><a href={"https://badges.roblox.com/v1/universes/" + GAME.universeId + "/badges?limit=100&sortOrder=Asc"} rel="nofollow external">Roblox official badge list ↗</a></li>
      </ul>
      <p>These links are evidence references, not the main reading path. Continue inside the site with the <Link href="/quick-start">Quick Start</Link>.</p>
    </GuidePage>
  );
}
