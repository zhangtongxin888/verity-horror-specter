import Link from "next/link";
import { GAME } from "../_data/site";

export function SiteHeader() {
  return (
    <>
      <div className="identity-bar">
        <span>Verified guide target</span>
        <b>{GAME.developer}</b>
        <span className="identity-id">Place {GAME.placeId} · Universe {GAME.universeId}</span>
        <Link href="/about-this-version">Which Verity is this?</Link>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Verity Horror Field Guide home">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span>VERITY <b>FIELD GUIDE</b></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/quick-start">Quick Start</Link>
          <Link href="/core-loop">Core Loop</Link>
          <Link href="/progression">Progression</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span>VERITY <b>FIELD GUIDE</b></span>
        </Link>
        <p>An independent, fact-checked beginner guide for {GAME.name} by {GAME.developer}.</p>
      </div>
      <div className="footer-links">
        <Link href="/quick-start">Quick Start</Link>
        <Link href="/common-mistakes">Common Mistakes</Link>
        <Link href="/about-this-version">Version Identity</Link>
        <Link href="/updates">Verification Notes</Link>
      </div>
      <div className="footer-disclaimer">
        <b>Guide scope</b>
        <p>Place {GAME.placeId} · Universe {GAME.universeId}. Not an official Roblox or developer website.</p>
      </div>
    </footer>
  );
}
