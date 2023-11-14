const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 4000;

const payload = JSON.parse(
  fs.readFileSync("./server/payload.json", { encoding: "utf8" })
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);

  if (req.url === "/global") {
    res.end(JSON.stringify({ data: payload.global }));
    return;
  }

  if (req.url.includes("/page")) {
    res.end(JSON.stringify({ data: payload.page }));
    return;
  }

  res.end(JSON.stringify([]));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
