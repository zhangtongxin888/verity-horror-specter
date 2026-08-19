import Link from "@/components/StaticLink";
import { CautionNote, FactNote, GuidePage, StepList } from "../_components/GuidePage";
import { makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror Progression — From Prologue to Endings",
  "A practical, evidence-based progression path for Verity [HORROR], from controls and the prologue to the official captured, Car Escape, and End of Verity outcomes.",
  "/progression",
);

export default function ProgressionPage() {
  return (
    <GuidePage
      index="03 / 06"
      eyebrow="Progression · What to learn next"
      title="Progress by proving one thing at a time."
      intro="Verity does not need an invented skill tree. Your useful progression is a sequence of repeatable checkpoints: controls, prologue, preparation, outcomes, and current-build verification."
      related={["/quick-start", "/core-loop", "/faq"]}
    >
      <h2>Your progression ladder</h2>
      <StepList>
        <li><div><h3>Control confidence</h3><p>Run and interact without pausing to remember the input. This removes a basic source of avoidable errors.</p></div></li>
        <li><div><h3>Prologue consistency</h3><p>Reach the “Complete Prologue” checkpoint reliably. Once the opening is familiar, you can spend attention on the three-day premise.</p></div></li>
        <li><div><h3>Preparation awareness</h3><p>Use the official “prepare and protect the house” instruction as your decision filter. Notice what the current build asks you to protect or prepare instead of importing a list from another version.</p></div></li>
        <li><div><h3>Outcome tracking</h3><p>Identify whether you were caught, reached the badge labeled Bad Ending: Car Escape, or reached Good Ending: End of Verity.</p></div></li>
        <li><div><h3>Version-aware mastery</h3><p>Check the guide’s verification date whenever the title advertises a new ending or major update. Re-confirm routes in the live build before treating them as settled.</p></div></li>
      </StepList>

      <h2>The official achievement signals</h2>
      <p>Roblox’s public badge list returned six enabled badges when this guide was verified:</p>
      <ul className="badge-list">
        <li>Welcome</li>
        <li>Hello Im verity</li>
        <li>Complete Prologue</li>
        <li>Verity Caught You</li>
        <li>Bad Ending: Car Escape</li>
        <li>Good Ending: End of Verity</li>
      </ul>
      <FactNote><p>The badge names prove that these milestones or outcomes exist. They do not, by themselves, prove the exact actions required to unlock them.</p></FactNote>

      <h2>A sensible goal for each stage</h2>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Horizontal table overflow needs a keyboard focus target. */}
      <div className="table-scroll" role="region" aria-label="Progression goals by stage" tabIndex={0}>
      <table className="fact-table">
        <thead><tr><th>Stage</th><th>Your goal</th><th>Move on when</th></tr></thead>
        <tbody>
          <tr><td>First run</td><td>Learn controls and story context</td><td>You can reach the prologue checkpoint without control confusion</td></tr>
          <tr><td>Early repeats</td><td>Understand the three-day instruction</td><td>Your choices consistently support preparation and protection</td></tr>
          <tr><td>Outcome runs</td><td>Record the result, not assumptions</td><td>You can name the official outcome you reached</td></tr>
          <tr><td>Current build</td><td>Test one uncertain route at a time</td><td>Your notes are reproducible after updates</td></tr>
        </tbody>
      </table>
      </div>

      <CautionNote><p>The public data does not verify an upgrade system, currency route, item economy, or specific ending recipe. If you see those presented without a current source, return to the <Link href="/about-this-version">identity record</Link> and check for mixed-version information.</p></CautionNote>
    </GuidePage>
  );
}
