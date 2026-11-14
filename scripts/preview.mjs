import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    const base = path.resolve(root, "." + pathname);
    const relative = path.relative(root, base);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      res.writeHead(400);
      res.end("Invalid path");
      return;
    }
    let filename;
    for (const candidate of [
      base,
      base + ".html",
      path.join(base, "index.html"),
    ]) {
      try {
        if ((await stat(candidate)).isFile()) {
          filename = candidate;
          break;
        }
      } catch {}
    }
    const status = filename ? 200 : 404;
    filename ||= path.join(root, "404.html");
    const content = await readFile(filename);
    res.writeHead(status, {
      "Content-Type":
        types[path.extname(filename)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch {
    res.writeHead(500);
    res.end("Build the site with npm run build before starting the preview.");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static production preview: http://127.0.0.1:${port}`),
);
