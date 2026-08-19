import Link from "@/components/StaticLink";
import { CautionNote, GuidePage } from "../_components/GuidePage";
import { GAME, SITE_URL, makeMetadata } from "../_data/site";

export const metadata = makeMetadata(
  "Verity Horror FAQ — Controls, Goal, Endings & Version",
  "Verified answers about Verity [HORROR] by Specter Development: the goal, controls, prologue, ending names, correct Place ID, and current guide limits.",
  "/faq",
);

const faqs = [
  ["Is this guide for the correct Verity?", "Yes—only when the Roblox experience shows " + GAME.developer + ", Place " + GAME.placeId + ", and Universe " + GAME.universeId + "."],
  ["Who is Verity?", "The official description calls Verity a yellow sphere found inside a mysterious box that appears while Ethan is home alone."],
  ["What is the goal?", "The official description tells players to prepare and protect the house before something arrives in three days."],
  ["How do I run and interact on PC?", "Use Shift to run and E to interact."],
  ["What are the Xbox controls?", "Use L3 to run and B to interact."],
  ["What are the PlayStation controls?", "Use L3 to run and Circle to interact."],
  ["Are mobile controls documented?", "Not in the public experience description checked for this guide, so this site does not invent a mobile mapping."],
  ["Does Verity have endings?", "Yes. Official badge names include Bad Ending: Car Escape and Good Ending: End of Verity, plus a Verity Caught You outcome."],
  ["How do I get the good ending?", "Roblox’s public badge metadata confirms the name but does not document the exact route. This guide will not present an unverified recipe as fact."],
  ["Is Car Escape the good ending?", "No. The official badge itself labels Car Escape as the Bad Ending."],
  ["How many enabled badges were verified?", "Six enabled badges were returned by Roblox’s public badge API when this guide was checked on August 18, 2026."],
  ["Is this an official wiki?", "No. It is an independent guide and is not affiliated with Roblox or Specter Development."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
  url: SITE_URL + "/faq",
};

export default function FaqPage() {
  return (
    <GuidePage
      index="05 / 06"
      eyebrow="FAQ · Short, sourced answers"
      title="Clear answers. Honest limits."
      intro="These answers use the target experience’s official description, Roblox Games metadata, and the official badge list. When those sources stop, the answer says so."
      related={["/quick-start", "/progression", "/about-this-version"]}
    >
      <div className="faq-list long-faq">
        {faqs.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <CautionNote><p>Need a route rather than an answer? Start with the <Link href="/quick-start">Quick Start</Link>, then continue to the <Link href="/core-loop">Core Loop</Link>.</p></CautionNote>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </GuidePage>
  );
}
