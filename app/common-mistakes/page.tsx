import Link from "next/link";
import { CautionNote, FactNote, GuidePage } from "../_components/GuidePage";
import { GAME, makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror Common Mistakes — Fix Your Next Run",
  "Avoid the most common Verity [HORROR] beginner mistakes: wrong-game guides, unfamiliar controls, stale ending assumptions, and mixed-version claims.",
  "/common-mistakes",
);

const mistakes = [
  {
    title: "Trusting the title instead of the IDs",
    symptom: "A guide mentions characters, systems, or goals that do not appear in your run.",
    fix: "Confirm " + GAME.developer + ", Place " + GAME.placeId + ", and Universe " + GAME.universeId + ". A matching Verity title alone is not evidence.",
  },
  {
    title: "Learning controls under pressure",
    symptom: "You stop to remember how to run or interact when the story is already moving.",
    fix: "Test the documented inputs early: PC Shift/E, Xbox L3/B, PlayStation L3/Circle.",
  },
  {
    title: "Skipping the prologue checkpoint",
    symptom: "You search for ending routes before you can clear the opening consistently.",
    fix: "Make the official Complete Prologue badge your first milestone, then move to the three-day premise.",
  },
  {
    title: "Calling Car Escape the good ending",
    symptom: "A route or summary treats any escape as the best documented result.",
    fix: "Use the official badge label: Bad Ending: Car Escape. A separate badge is named Good Ending: End of Verity.",
  },
  {
    title: "Following an old ending route blindly",
    symptom: "A step-by-step guide no longer matches prompts in the current build.",
    fix: "Check the guide date and current experience title. Test one claim at a time instead of forcing the whole route.",
  },
  {
    title: "Filling evidence gaps with another Verity",
    symptom: "An item list or mechanic sounds detailed but has no source tied to the target Place ID.",
    fix: "Treat missing public detail as unknown. Do not borrow specifics from Umek0 Games, Verity [REALISTIC], or another similarly named experience.",
  },
] as const;

export default function CommonMistakesPage() {
  return (
    <GuidePage
      index="04 / 06"
      eyebrow="Common mistakes · Recoverable beginner errors"
      title="Fix the information problem first."
      intro="The fastest way to improve is often to remove the wrong assumption before repeating the run. These mistakes are grounded in the verified differences between Roblox experiences and official badge labels."
      related={["/quick-start", "/about-this-version", "/faq"]}
    >
      <h2>Six mistakes to remove now</h2>
      {mistakes.map((mistake, index) => (
        <section key={mistake.title}>
          <h3>{String(index + 1).padStart(2, "0")} · {mistake.title}</h3>
          <p><strong>What it looks like:</strong> {mistake.symptom}</p>
          <p><strong>Better move:</strong> {mistake.fix}</p>
        </section>
      ))}
      <FactNote><p>The safest next action after a confusing run is to compare what you saw with the <Link href="/quick-start">verified first-run sequence</Link>, then change one variable on the next attempt.</p></FactNote>
      <h2>Claims this guide deliberately avoids</h2>
      <ul>
        <li>Exact item counts or a shopping order.</li>
        <li>Specific house-defense upgrades.</li>
        <li>Room-by-room paths and fixed daily task lists.</li>
        <li>Enemy behavior, chase triggers, or audio rules.</li>
        <li>A guaranteed recipe for either ending.</li>
      </ul>
      <CautionNote><p>Those details may exist in the current game, but Roblox’s public description and badge metadata do not verify them. Accuracy means saying “not yet confirmed” when the source stops.</p></CautionNote>
    </GuidePage>
  );
}
