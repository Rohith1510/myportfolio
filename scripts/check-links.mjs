import fs from "node:fs/promises";
import {
  projects,
  archive,
  experiences,
  recognition,
  publications,
  profile,
} from "../lib/portfolio.ts";
const urls = [
  ...new Set(
    [
      profile.github,
      profile.linkedin,
      ...projects.flatMap((p) => p.links.map((link) => link.href)),
      ...archive.map((p) => p.href),
      ...experiences.flatMap((e) => e.links.map((link) => link.href)),
      ...recognition.map((r) => r.href),
      ...publications.map((p) => p.href),
    ].filter((url) => url.startsWith("https://")),
  ),
];
const results = [];
for (let i = 0; i < urls.length; i += 4) {
  await Promise.all(
    urls.slice(i, i + 4).map(async (url) => {
      try {
        let response = await fetch(url, {
          method: "HEAD",
          signal: AbortSignal.timeout(20000),
        });
        if ([403, 404, 405].includes(response.status))
          response = await fetch(url, { signal: AbortSignal.timeout(20000) });
        const row = { url, status: response.status, finalUrl: response.url };
        results.push(row);
        console.log(response.status, url);
      } catch (error) {
        results.push({ url, error: error.message });
        console.log("UNVERIFIED", url, error.message);
      }
    }),
  );
}
await fs.mkdir("test-results", { recursive: true });
await fs.writeFile(
  "test-results/links.json",
  JSON.stringify({ checked: "2026-11-14", results }, null, 2) + "\n",
);
