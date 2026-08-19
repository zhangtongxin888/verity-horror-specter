import Link from "@/components/StaticLink";

export default function NotFound() {
  return (
    <main className="final-cta not-found">
      <p className="section-kicker">404 · LOST ROUTE</p>
      <h1>This page did not survive the current build.</h1>
      <p>Return to the verified beginner path and choose your next step from there.</p>
      <Link className="primary-button" href="/quick-start">Open the Quick Start <span aria-hidden="true">→</span></Link>
    </main>
  );
}
