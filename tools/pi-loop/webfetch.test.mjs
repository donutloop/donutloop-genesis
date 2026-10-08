import test from "node:test";
import assert from "node:assert/strict";
import { citationUrl, decodeEntities, fetchReference, formatReference, htmlToText } from "./webfetch.mjs";

const PAGE = `<!doctype html><html><head><title>Lab Wins Genesis Award &amp; More</title>
<meta name="description" content="A lab receives funding." /><style>body{color:red}</style>
<script>var x = "<p>junk</p>";</script></head>
<body><nav><a href="/home">Home</a><a href="/about">About</a></nav>
<article><h1>Lab Wins Genesis Award</h1><p>Funding of&nbsp;$4.2M covers <b>three</b> nodes &mdash; details.</p>
<ul><li>Quantum foundry</li><li>Liquid cooling</li></ul>
<h2>Quotes</h2><p>"We are delighted,&rdquo; said the director. Read the <a href="https://lab.example/press">press release</a>.</p></article>
<footer>Cookie consent</footer></body></html>`;

function mockFetch({ body = PAGE, type = "text/html; charset=utf-8", status = 200, url = "https://a.example/x", throws = null } = {}) {
  return async (called) => {
    if (throws) throw new Error(throws);
    return {
      ok: status >= 200 && status < 300,
      status,
      url,
      headers: { get: (k) => (String(k).toLowerCase() === "content-type" ? type : null) },
      arrayBuffer: async () => new TextEncoder().encode(body).buffer,
    };
  };
}

test("htmlToText keeps the article and drops script/style/nav noise", () => {
  const text = htmlToText(PAGE);
  assert.match(text, /# Lab Wins Genesis Award/);
  assert.match(text, /Funding of \$4\.2M covers three nodes — details\./);
  assert.match(text, /- Quantum foundry/);
  assert.match(text, /- Liquid cooling/);
  assert.match(text, /"We are delighted," said the director\./);
  assert.doesNotMatch(text, /junk|color:red|Cookie consent|var x|lab\.example\/press/);
});

test("htmlToText can keep link targets on demand", () => {
  const text = htmlToText(PAGE, { links: true });
  assert.match(text, /press release \(https:\/\/lab\.example\/press\)/);
  assert.doesNotMatch(text, /Home|About/); // nav blocks are dropped even in links mode
});

test("decodeEntities handles named, decimal and hex entities", () => {
  assert.equal(decodeEntities("a&nbsp;b&#39;c&#x2014;d&amp;e"), "a b'c—d&e");
});

test("fetchReference returns bounded text plus citation metadata", async () => {
  const r = await fetchReference("https://a.example/x", { fetchImpl: mockFetch(), maxChars: 40 });
  assert.equal(r.ok, true);
  assert.equal(r.kind, "html");
  assert.equal(r.title, "Lab Wins Genesis Award & More");
  assert.equal(r.description, "A lab receives funding.");
  assert.equal(r.truncated, true);
  assert.equal(r.text.length, 40);
  assert.equal(r.status, 200);
});

test("fetchReference reports failures instead of throwing", async () => {
  const bad = await fetchReference("https://a.example/x", { fetchImpl: mockFetch({ status: 403 }) });
  assert.equal(bad.ok, false);
  assert.equal(bad.error, "HTTP 403");
  const nope = await fetchReference("https://a.example/x", { fetchImpl: mockFetch({ throws: "ENOTFOUND" }) });
  assert.equal(nope.ok, false);
  assert.match(nope.error, /ENOTFOUND/);
  const junk = await fetchReference("not-a-url", { fetchImpl: mockFetch() });
  assert.equal(junk.ok, false);
  assert.match(junk.error, /not an http/);
});

test("fetchReference labels PDFs and binaries so the agent can switch strategy", async () => {
  const pdf = await fetchReference("https://a.example/x.pdf", { fetchImpl: mockFetch({ body: "%PDF-1.7", type: "application/pdf" }) });
  assert.equal(pdf.kind, "pdf");
  assert.match(pdf.note, /pdftotext/);
  const bin = await fetchReference("https://a.example/x.zip", { fetchImpl: mockFetch({ body: "PK", type: "application/zip" }) });
  assert.equal(bin.kind, "binary");
  assert.match(formatReference(bin), /unsupported content-type/);
});

test("plain-text responses pass through", async () => {
  const r = await fetchReference("https://a.example/x.txt", { fetchImpl: mockFetch({ body: "line one\nline two", type: "text/plain" }) });
  assert.equal(r.kind, "plain");
  assert.equal(r.text, "line one\nline two");
});

test("formatReference gives the agent a citable block", async () => {
  const r = await fetchReference("https://a.example/x", { fetchImpl: mockFetch() });
  const text = formatReference(r);
  assert.match(text, /^URL: https:\/\/a\.example\/x/);
  assert.match(text, /TITLE: Lab Wins Genesis Award & More/);
  assert.match(text, /STATUS: 200 text\/html/);
  assert.match(formatReference({ ok: false, url: "u", error: "boom" }), /WEBFETCH FAILED u: boom/);
});

test("citationUrl strips tracking noise for the reference entry", () => {
  assert.equal(citationUrl("https://www.A.Example.com/a/?utm_source=x&hl=en"), "https://a.example.com/a");
});
