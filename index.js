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
const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

// لاگ همه درخواست‌ها
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("OK");
});

// fallback برای بقیه مسیرها
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
