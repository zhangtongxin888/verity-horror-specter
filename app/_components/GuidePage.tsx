import Link from "@/components/StaticLink";
import type { ReactNode } from "react";
import { ROUTES } from "../_data/site";

export function GuidePage({
  index,
  eyebrow,
  title,
  intro,
  children,
  related,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  related: readonly string[];
}) {
  const relatedRoutes = ROUTES.filter((route) => related.includes(route.href));

  return (
    <main>
      <section className="guide-hero">
        <p className="page-index">{index}</p>
        <div>
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-intro">{intro}</p>
        </div>
      </section>
      <div className="guide-layout">
        <aside className="guide-rail" aria-label="On this page">
          <span>VERIFIED SCOPE</span>
          <p>Checked against the Specter Development experience and Roblox public metadata.</p>
          <Link href="/about-this-version">See identity record →</Link>
        </aside>
        <article className="guide-article">{children}</article>
      </div>
      <section className="related-reading" aria-labelledby="related-title">
        <p className="section-kicker">KEEP YOUR RUN MOVING</p>
        <h2 id="related-title">Related reading</h2>
        <div className="related-grid">
          {relatedRoutes.map((route) => (
            <Link href={route.href} key={route.href}>
              <small>{route.short}</small>
              <b>{route.label}</b>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function FactNote({ children, label = "Verified fact" }: { children: ReactNode; label?: string }) {
  return <aside className="fact-note"><b>{label}</b><div>{children}</div></aside>;
}

export function CautionNote({ children }: { children: ReactNode }) {
  return <aside className="caution-note"><b>Current-build caution</b><div>{children}</div></aside>;
}

export function StepList({ children }: { children: ReactNode }) {
  return <ol className="step-list">{children}</ol>;
}
