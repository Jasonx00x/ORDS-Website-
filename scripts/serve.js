const http = require("http");
const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "..", "dist");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = cleanPath === "/" ? "/index.html" : cleanPath;
  const direct = path.join(dist, requested);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return { file: direct, status: 200 };
  const html = path.join(dist, `${requested}.html`);
  if (fs.existsSync(html) && fs.statSync(html).isFile()) return { file: html, status: 200 };
  return { file: path.join(dist, "404.html"), status: 404 };
}

http.createServer((req, res) => {
  const { file, status } = resolveFile(req.url || "/");
  const ext = path.extname(file);
  res.writeHead(status, { "Content-Type": types[ext] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`ORDS website preview: http://localhost:${port}`);
});
