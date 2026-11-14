import fs from "node:fs/promises";
import { projects, profile } from "../lib/portfolio.ts";
await fs.writeFile(
  "public/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${profile.site}/sitemap.xml\n`,
);
const urls = [
  { url: profile.site, priority: "1.0" },
  ...projects.map((project) => ({
    url: `${profile.site}/projects/${project.slug}`,
    priority: "0.8",
  })),
];
await fs.writeFile(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((item) => `  <url><loc>${item.url}</loc><changefreq>monthly</changefreq><priority>${item.priority}</priority></url>`).join("\n")}\n</urlset>\n`,
);
console.log("Generated static robots.txt and sitemap.xml from portfolio data.");
