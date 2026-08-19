import Link from "@/components/StaticLink";
import { makeMetadata, GAME } from "./_data/site";

export const metadata = makeMetadata(
  "Verity Horror Beginner Guide — Start Here",
  "Start Verity [HORROR] with a verified first-run plan, then learn the core loop, progression route, common mistakes, and current-version facts.",
  "/",
);

const path = [
  { n: "01", title: "Confirm the version", text: "Match Specter Development and both IDs before trusting any tip.", href: "/about-this-version" },
  { n: "02", title: "Learn two actions", text: "Know your run and interact controls before the story asks for speed.", href: "/quick-start" },
  { n: "03", title: "Finish the prologue", text: "Use the opening as your safe orientation goal and first checkpoint.", href: "/quick-start#prologue" },
  { n: "04", title: "Prepare for three days", text: "Build decisions around the official prepare-and-protect premise.", href: "/core-loop" },
];

const mistakes = [
  ["Wrong experience", "A matching title is not enough. Developer and IDs are the reliable check."],
  ["Unfamiliar controls", "Learn run and interact before the story starts adding pressure."],
  ["Car Escape = good ending", "Roblox’s official badge names label Car Escape as the Bad Ending."],
  ["Following stale routes", "The current title advertises a new ending, so old step-by-step routes may drift."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Beginner-first · Fact-checked for the current Specter Development experience</p>
          <h1>Start with a plan.<br /><em>Survive the confusion.</em></h1>
          <p className="hero-lede">
            Your reliable starting point for <strong>{GAME.name}</strong>: learn the controls, clear the prologue, understand the three-day premise, and follow a progression path without mixing in another Verity game.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/quick-start">Open the quick start <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="#beginner-path">See the full beginner path</Link>
          </div>
          <p className="trust-line">No invented item lists. No copied routes from similarly named games.</p>
        </div>

        <aside className="quick-card" aria-labelledby="quick-card-title">
          <div className="quick-card-head">
            <span>START HERE</span><small>4 min read</small>
          </div>
          <h2 id="quick-card-title">Your first-run checklist</h2>
          <ol>
            <li><span>1</span>Check the developer and IDs</li>
            <li><span>2</span>Learn run + interact controls</li>
            <li><span>3</span>Complete the prologue</li>
            <li><span>4</span>Plan around the three-day warning</li>
          </ol>
          <Link href="/quick-start">Walk through every step <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>

      <section className="identity-panel" aria-label="Verified game identity">
        <div><span className="signal" aria-hidden="true" /><b>Correct experience confirmed</b></div>
        <dl>
          <div><dt>Developer</dt><dd>{GAME.developer}</dd></div>
          <div><dt>Place</dt><dd>{GAME.placeId}</dd></div>
          <div><dt>Universe</dt><dd>{GAME.universeId}</dd></div>
        </dl>
        <Link href="/about-this-version">Why these IDs matter →</Link>
      </section>

      <section className="home-section" id="beginner-path">
        <div className="section-heading">
          <p className="section-kicker">THE BEGINNER PATH</p>
          <h2>Four steps. One deliberate first run.</h2>
          <p>Each step leads to a deeper guide, so you always know what to read next.</p>
        </div>
        <div className="path-grid">
          {path.map((item) => (
            <Link href={item.href} key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">Read guide ↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="loop-section" id="core-loop">
        <div className="loop-copy">
          <p className="section-kicker">CORE LOOP</p>
          <h2>Learn what the public facts actually support.</h2>
          <p>The reliable loop is intentionally simple: clear the opening, use the official controls, prepare and protect during the stated three-day premise, then use the documented outcome names to plan another attempt.</p>
          <Link className="primary-button small-button" href="/core-loop">Understand the loop <span aria-hidden="true">→</span></Link>
        </div>
        <div className="loop-steps" aria-label="Core loop overview">
          {["Orient", "Prologue", "Prepare", "Outcome"].map((step, index) => (
            <div key={step}><span>0{index + 1}</span><b>{step}</b></div>
          ))}
        </div>
      </section>

      <section className="progression-section">
        <div>
          <p className="section-kicker">PROGRESSION</p>
          <h2>Move from orientation to outcome tracking.</h2>
          <p>Build confidence in layers: controls first, a consistent prologue next, then preparation and the official outcome names. That sequence gives every repeat run a purpose.</p>
          <Link className="text-link" href="/progression">Open the progression route</Link>
        </div>
        <ol>
          <li><span>01</span><div><b>Control confidence</b><small>Run and interact without hesitation</small></div></li>
          <li><span>02</span><div><b>Prologue consistency</b><small>Reach the first official checkpoint</small></div></li>
          <li><span>03</span><div><b>Outcome awareness</b><small>Separate caught, bad, and good labels</small></div></li>
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">COMMON MISTAKES</p><h2>Lose less time to bad information.</h2></div>
          <Link className="text-link" href="/common-mistakes">See all mistakes</Link>
        </div>
        <div className="mistake-grid">
          {mistakes.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="faq-preview" id="faq">
        <div>
          <p className="section-kicker">FAQ</p>
          <h2>Answers you can trust before your next run.</h2>
          <p>Short answers use the official experience description and Roblox public metadata. Anything the public record does not prove is labeled clearly.</p>
          <Link className="primary-button small-button" href="/faq">Open every answer <span aria-hidden="true">→</span></Link>
        </div>
        <div className="faq-list">
          <details open><summary>What is the goal?</summary><p>Prepare and protect the house before the story’s stated three-day deadline.</p></details>
          <details><summary>How do I run and interact?</summary><p>PC: Shift and E. Xbox: L3 and B. PlayStation: L3 and Circle.</p></details>
          <details><summary>Is Car Escape the good ending?</summary><p>No. The official badge list names it “Bad Ending: Car Escape.”</p></details>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-kicker">READY FOR THE FIRST STEP?</p>
        <h2>Make the prologue your first clean win.</h2>
        <Link className="primary-button" href="/quick-start">Begin the quick start <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
