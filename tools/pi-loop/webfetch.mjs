/**
 * webfetch.mjs — content retrieval for the reference-intake loop.
 *
 * `prompts/process_url_reference.md` step 2 asks the agent to "inspect or retrieve
 * the target reference content". The agent gets this two ways:
 *
 *   - the `webfetch` tool pi-loop registers on every round (preferred), and
 *   - `node tools/pi-loop/webfetch.mjs <url>` through `bash` (same code path, and
 *     a machine path for scripts: `--json`).
 *
 * Both go through `fetchReference()`, which returns plain text bounded to
 * `maxChars` so a 2 MB newsroom page cannot eat the round's context window.
 *
 * CLI:
 *   node tools/pi-loop/webfetch.mjs <url> [--max-chars=N] [--timeout=ms]
 *                                     [--json] [--links] [--raw] [--out=FILE]
 */
import fs from "node:fs";
import path from "node:path";
import { canonicalizeUrl } from "./link-queue.mjs";

const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36 pi-loop/1.0";

const ENTITY = {
  "&nbsp;": " ", "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'",
  "&ndash;": "–", "&mdash;": "—", "&hellip;": "…",
  "&rsquo;": "'", "&lsquo;": "'", "&ldquo;": '"', "&rdquo;": '"', "&bull;": "·", "&minus;": "-",
};

export function decodeEntities(text) {
  return String(text ?? "")
    .replace(/&(nbsp|amp|lt|gt|quot|apos|ndash|mdash|hellip|rsquo|lsquo|ldquo|rdquo|bull|minus);/g, (_, k) => ENTITY[`&${k};`])
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, "&");
}

/**
 * HTML → readable text. Drops script/style/nav noise, keeps headings, list items
 * and (optionally) link targets, then collapses whitespace.
 */
export function htmlToText(html, { links = false } = {}) {
  let s = String(html ?? "");
  s = s.replace(/<!--[\s\S]*?-->/g, " ");
  s = s.replace(/<(script|style|noscript|template|svg|form|iframe|video|audio|picture|source|head)\b[^>]*>[\s\S]*?<\/\1>/gi, " ");
  s = s.replace(/<(nav|footer|aside|header)\b[^>]*>[\s\S]*?<\/\1>/gi, " ");
  if (links) {
    s = s.replace(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, label) => {
      const text = label.replace(/<[^>]+>/g, "").trim();
      return text ? ` ${text} (${href}) ` : " ";
    });
  }
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, inner) => `\n\n${"#".repeat(Number(level))} ${inner.replace(/<[^>]+>/g, " ")}\n`);
  s = s.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => `\n- ${inner.replace(/<[^>]+>/g, " ")}`);
  s = s.replace(/<(br|hr)\b[^>]*>/gi, "\n");
  s = s.replace(/<\/(p|div|section|article|li|tr|td|th|ul|ol|table|figure|figcaption|blockquote)>/gi, "\n");
  s = s.replace(/<[^>]+>/g, " ");
  s = decodeEntities(s);
  return s
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    // Drop menu crumbs and cookie banners: short lines with no sentence value.
    .filter((line, i, all) => line.length > 0 && !(line.length < 4 && !/[A-Za-z]/.test(line)) && all[i - 1] !== line)
    .join("\n")
    .trim();
}

function metaContent(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`, "i");
  const m = re.exec(html ?? "");
  return m ? decodeEntities(m[1] ?? m[2] ?? "").trim() : null;
}

/** Strip the query noise a URL carries into a citation (utm, ref, hl, ...). */
export function citationUrl(url) {
  return canonicalizeUrl(url) ?? String(url ?? "").trim();
}

/**
 * Fetch one reference and reduce it to text the paper-writing agent can cite.
 * Never throws: every failure comes back as { ok:false, error }.
 */
export async function fetchReference(url, { maxChars = 12000, timeoutMs = 25000, links = false, fetchImpl = globalThis.fetch, userAgent = USER_AGENT } = {}) {
  const started = Date.now();
  const clean = String(url ?? "").trim();
  if (!/^https?:\/\//i.test(clean)) return { ok: false, url: clean, error: "not an http(s) URL" };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(clean, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": userAgent,
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,application/pdf;q=0.2,*/*;q=0.1",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    const type = res.headers?.get?.("content-type") ?? res.headers?.get?.("Content-Type") ?? "";
    const bytes = new Uint8Array(await res.arrayBuffer());
    const base = {
      ok: res.ok,
      url: clean,
      finalUrl: res.url || clean,
      status: res.status,
      contentType: type,
      bytes: bytes.length,
      ms: Date.now() - started,
    };
    if (!res.ok) return { ...base, ok: false, error: `HTTP ${res.status}`, text: "" };

    if (/application\/pdf/i.test(type) || bytes.slice(0, 4).join("") === "%PDF") {
      return { ...base, kind: "pdf", title: metaContent("", "title"), text: "", note: `PDF (${bytes.length} bytes) — download with \`curl -L -o /tmp/ref.pdf ${clean}\` and read it with \`pdftotext\` (install poppler) or pass the PDF text to the round.` };
    }
    const isText = !type || /text\/|html|xml|json|javascript/i.test(type);
    if (!isText) return { ...base, kind: "binary", text: "", note: `unsupported content-type "${type}" — describe it from the search result instead of fetching it.` };

    const body = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    const kind = /html/i.test(type) || /^\s*</.test(body) ? "html" : "plain";
    const text = kind === "html" ? htmlToText(body, { links }) : body.trim();
    const clipped = text.length > maxChars ? text.slice(0, maxChars) : text;
    const htmlTitle = kind === "html" ? decodeEntities(/<title[^>]*>([\s\S]*?)<\/title>/i.exec(body)?.[1] ?? "").trim() : "";
    return {
      ...base,
      kind,
      title: htmlTitle || metaContent(body, "og:title") || metaContent(body, "twitter:title") || null,
      description: metaContent(body, "description") ?? metaContent(body, "og:description"),
      truncated: text.length > maxChars,
      chars: text.length,
      text: clipped,
    };
  } catch (e) {
    return {
      ok: false, url: clean, finalUrl: clean, status: 0, contentType: "", bytes: 0, ms: Date.now() - started,
      error: e?.name === "AbortError" ? `timed out after ${timeoutMs}ms` : String(e?.cause?.code ?? e?.message ?? e),
      text: "",
    };
  } finally {
    clearTimeout(timer);
  }
}

export function formatReference(result) {
  if (!result?.ok) return `WEBFETCH FAILED ${result?.url ?? ""}: ${result?.error ?? "unknown error"}\nRetry once, then work from the title/domain and say so in the entry.`;
  const head = [
    `URL: ${result.finalUrl}`,
    result.title ? `TITLE: ${result.title}` : null,
    result.description ? `DESCRIPTION: ${result.description}` : null,
    `STATUS: ${result.status} ${result.contentType || ""} (${result.bytes} bytes, ${result.ms}ms)${result.truncated ? ` — truncated to ${result.text.length}/${result.chars} chars` : ""}`,
    result.note ? `NOTE: ${result.note}` : null,
  ].filter(Boolean).join("\n");
  return `${head}\n\n${result.text || "(no extractable text)"}`.trim();
}

// ---- CLI ----------------------------------------------------------------------

const HELP_TEXT = `usage: node tools/pi-loop/webfetch.mjs <url> [options]

  --max-chars=N   clamp extracted text (default 12000)
  --timeout=MS    request timeout (default 25000)
  --links         keep link targets as "text <url>"
  --raw           return the raw body instead of extracted text
  --json          print the structured result as JSON
  --out=FILE      write the text to FILE instead of stdout
  --help          this help
`;

async function main(argv) {
  const url = argv.find((a) => !a.startsWith("--"));
  const flag = (name, dflt) => {
    const hit = argv.find((a) => a.startsWith(`--${name}=`));
    return hit ? hit.slice(name.length + 3) : dflt;
  };
  if (argv.includes("--help") || !url) {
    process.stdout.write(HELP_TEXT);
    return argv.includes("--help") ? 0 : 2;
  }
  const result = await fetchReference(url, {
    maxChars: Number(flag("max-chars", "12000")) || 12000,
    timeoutMs: Number(flag("timeout", "25000")) || 25000,
    links: argv.includes("--links"),
  });
  if (argv.includes("--raw") && result.text === undefined) result.text = "";
  const out = argv.includes("--json") ? JSON.stringify(result, null, 2) : formatReference(result);
  const outFile = flag("out", null);
  if (outFile) {
    fs.mkdirSync(path.dirname(path.resolve(outFile)), { recursive: true });
    fs.writeFileSync(outFile, out);
    process.stdout.write(`${result.ok ? "ok" : "failed"} ${outFile} (${out.length} chars)\n`);
  } else {
    process.stdout.write(`${out}\n`);
  }
  return result.ok ? 0 : 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main(process.argv.slice(2)).then((code) => process.exit(code));
}
