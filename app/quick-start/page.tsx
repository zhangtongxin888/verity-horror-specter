import Link from "@/components/StaticLink";
import { CautionNote, FactNote, GuidePage, StepList } from "../_components/GuidePage";
import { GAME, makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror Quick Start — Your First Run",
  "A verified first-run plan for Verity [HORROR]: confirm the right game, learn controls, complete the prologue, and prepare for the three-day premise.",
  "/quick-start",
);

export default function QuickStartPage() {
  return (
    <GuidePage
      index="01 / 06"
      eyebrow="Quick start · Your first useful run"
      title="Four steps before the pressure starts."
      intro="Use this path to remove the preventable confusion from your first session. Every step below is supported by the official experience description or Roblox public metadata."
      related={["/core-loop", "/common-mistakes", "/faq"]}
    >
      <h2>Before you begin: confirm the experience</h2>
      <p>A title search is not enough because Roblox hosts several experiences called Verity. The guide on this site covers <strong>{GAME.name} by {GAME.developer}</strong>, Place <strong>{GAME.placeId}</strong>, Universe <strong>{GAME.universeId}</strong>.</p>
      <FactNote><p>If the developer or either ID differs, stop using this guide for that run. Open the <Link href="/about-this-version">full identity record</Link> if you need a side-by-side check.</p></FactNote>

      <h2>Learn the two official actions</h2>
      <p>The public experience description documents run and interact controls for PC, Xbox, and PlayStation.</p>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Horizontal table overflow needs a keyboard focus target. */}
      <div className="table-scroll" role="region" aria-label="Official controls by platform" tabIndex={0}>
      <table className="fact-table">
        <thead><tr><th>Platform</th><th>Run</th><th>Interact</th></tr></thead>
        <tbody>
          <tr><td>PC</td><td>Shift</td><td>E</td></tr>
          <tr><td>Xbox</td><td>L3</td><td>B</td></tr>
          <tr><td>PlayStation</td><td>L3</td><td>Circle</td></tr>
        </tbody>
      </table>
      </div>
      <p>Mobile controls are not listed in the public description, so this guide does not invent a mapping for them.</p>

      <h2 id="prologue">Your first-run sequence</h2>
      <StepList>
        <li><div><h3>Check the identity</h3><p>Match {GAME.developer}, Place {GAME.placeId}, and Universe {GAME.universeId}. This prevents nearly every wrong-guide problem.</p></div></li>
        <li><div><h3>Test run and interact</h3><p>Use the documented controls as soon as the experience allows input. Build the habit before the story needs a quick response.</p></div></li>
        <li><div><h3>Finish the prologue</h3><p>Make “Complete Prologue” your first clean milestone. Roblox’s official badge list confirms that this stage exists.</p></div></li>
        <li><div><h3>Respect the three-day premise</h3><p>The official description says something arrives in three days and tells players to prepare and protect the house. Treat that warning as the organizing idea for every decision.</p></div></li>
      </StepList>

      <h2>What the opening establishes</h2>
      <p>The official description introduces Ethan, a mysterious box on the porch, and a yellow sphere named Verity. Verity appears friendly at first, then begins watching, listening, and becoming more dangerous. This is the reliable story frame; detailed room-by-room routes are not part of Roblox’s public metadata.</p>
      <CautionNote><p>Do not assume that item lists, house-defense purchases, or exact ending steps from another site apply to this Place ID. This guide leaves those claims out until the current build can support them.</p></CautionNote>

      <h2>After the prologue</h2>
      <p>Move next to the <Link href="/core-loop">core loop</Link>: orient, clear the opening, prepare during the three-day premise, then record the outcome you actually reached. If a run ends early, use the <Link href="/common-mistakes">common mistakes guide</Link> before repeating it.</p>
      <h3>Documented outcome names</h3>
      <ul className="badge-list">
        <li>Verity Caught You</li>
        <li>Bad Ending: Car Escape</li>
        <li>Good Ending: End of Verity</li>
      </ul>
      <p>These names come from official Roblox badges. The public badge metadata does not publish exact routes, so the names are reliable while step-by-step unlock instructions are not yet claimed here.</p>
    </GuidePage>
  );
}
