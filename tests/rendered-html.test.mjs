import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", String(Date.now()));
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

async function request(route, accept = "text/html") {
  return worker.fetch(
    new Request("https://verityhorror.wiki" + route, { headers: { accept } }),
    env,
    ctx,
  );
}

const pages = [
  ["/", "Start with a plan", "Verity Horror Beginner Guide"],
  ["/quick-start", "Four steps before the pressure starts", "Verity Horror Quick Start"],
  ["/core-loop", "Orient. Prepare. Protect. Learn.", "Verity Horror Core Loop"],
  ["/progression", "Progress by proving one thing at a time", "Verity Horror Progression"],
  ["/common-mistakes", "Fix the information problem first", "Verity Horror Common Mistakes"],
  ["/faq", "Clear answers. Honest limits.", "Verity Horror FAQ"],
  ["/about-this-version", "This guide follows the IDs", "Which Verity Is This"],
  ["/updates", "What we checked", "Verity Horror Verification Notes"],
];

for (const [route, visibleText, titleText] of pages) {
  test("renders " + route + " with identity, metadata, and security headers", async () => {
    const response = await request(route);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");

    const html = await response.text();
    assert.match(html, new RegExp(visibleText.replace(/[.*+?^$()|[\]{}]/g, "\\$&"), "i"));
    assert.match(html, new RegExp("<title>[^<]*" + titleText.replace(/[.*+?^$()|[\]{}]/g, "\\$&"), "i"));
    assert.match(html, /129839966867899/);
    assert.match(html, /10514488908/);
    assert.match(html, /Specter Development/);
    const canonicalUrlPattern = route === "/"
      ? "https://verityhorror\\.wiki/?"
      : "https://verityhorror\\.wiki" + route;
    assert.match(html, new RegExp('rel="canonical"[^>]+href="' + canonicalUrlPattern + '"', "i"));
    assert.match(html, /og:image/);
    assert.match(html, /https:\/\/verityhorror\.wiki\/og\.png/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
  });
}

test("publishes FAQ structured data", async () => {
  const response = await request("/faq");
  const html = await response.text();
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /How do I run and interact on PC/);
  assert.match(html, /Bad Ending: Car Escape/);
});

test("publishes crawlable robots and complete sitemap", async () => {
  const robots = await request("/robots.txt", "text/plain");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.match(robotsText, /Allow:\s*\//);
  assert.match(robotsText, /https:\/\/verityhorror\.wiki\/sitemap\.xml/);

  const sitemap = await request("/sitemap.xml", "application/xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const [route] of pages) {
    const url = "https://verityhorror.wiki" + (route === "/" ? "/" : route);
    assert.match(xml, new RegExp(url.replace(/[.*+?^$()|[\]{}]/g, "\\$&")));
  }
  assert.equal((xml.match(/<url>/g) ?? []).length, pages.length);
});

test("static output does not load the Vinext link runtime", async () => {
  const chunks = await readdir(new URL("../dist/client/_next/static/chunks/", import.meta.url));
  assert.equal(chunks.filter((name) => name.startsWith("link-") && name.endsWith(".js")).length, 0);
});
