const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  console.log("REQ:", req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("SERVER OK");
});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
