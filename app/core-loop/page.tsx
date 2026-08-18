import Link from "next/link";
import { CautionNote, FactNote, GuidePage, StepList } from "../_components/GuidePage";
import { makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror Core Loop — What to Do Each Run",
  "Understand the verified Verity [HORROR] loop: orient, complete the prologue, prepare and protect through the three-day story premise, then learn from your outcome.",
  "/core-loop",
);

export default function CoreLoopPage() {
  return (
    <GuidePage
      index="02 / 06"
      eyebrow="Core loop · A repeatable mental model"
      title="Orient. Prepare. Protect. Learn."
      intro="The public record supports a clear high-level loop even when it does not reveal every item, room, or ending trigger. Use that loop to keep each attempt purposeful."
      related={["/quick-start", "/progression", "/common-mistakes"]}
    >
      <h2>The loop in four phases</h2>
      <StepList>
        <li><div><h3>Orient</h3><p>Confirm the correct Place ID, learn run and interact, and follow the opening story about Ethan, the porch package, and Verity.</p></div></li>
        <li><div><h3>Complete the prologue</h3><p>Use the official “Complete Prologue” badge as your first dependable checkpoint. If you have not reached it, stay focused on the opening rather than chasing ending advice.</p></div></li>
        <li><div><h3>Prepare and protect</h3><p>The experience description states that something is coming in three days and tells you to prepare and protect the house. Let that deadline guide your priorities.</p></div></li>
        <li><div><h3>Record the outcome</h3><p>Compare your result with the official badge names: caught, Bad Ending: Car Escape, or Good Ending: End of Verity. Then choose one skill or uncertainty to improve on the next attempt.</p></div></li>
      </StepList>

      <FactNote label="Why this loop is safe"><p>Every phase above is anchored to the official description or official badge names. It avoids unverified claims about currency, upgrades, locations, enemies, and exact ending conditions.</p></FactNote>

      <h2>How to make the loop useful</h2>
      <h3>Set one checkpoint per run</h3>
      <p>On an early attempt, “finish the prologue cleanly” is a better target than “get the best ending.” A narrow checkpoint makes failure easier to diagnose and keeps the next attempt from becoming a blind repeat.</p>
      <h3>Separate observation from assumption</h3>
      <p>When you notice a prompt or story event, record what the current build actually showed. Do not turn a single observation into a universal rule. The experience title was advertising a new ending when this guide was checked, which makes old routes especially fragile.</p>
      <h3>Use internal guide links as a route</h3>
      <p>Start with the <Link href="/quick-start">first-run sequence</Link>, move to <Link href="/progression">progression</Link> once the prologue is consistent, and open <Link href="/common-mistakes">mistake recovery</Link> when your runs stall.</p>

      <h2>What this loop does not claim</h2>
      <ul>
        <li>No exact item count or shopping route.</li>
        <li>No guaranteed room order or house layout.</li>
        <li>No claimed enemy behavior or chase trigger.</li>
        <li>No unverified unlock recipe for either ending badge.</li>
      </ul>
      <CautionNote><p>If a future Roblox description or official update documents more detail, the loop can expand. Until then, accuracy is more useful than a confident but mixed-version walkthrough.</p></CautionNote>
    </GuidePage>
  );
}
