const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>VPS OK ✅</h1>
    <p>Hello, VPS is alive 🚀</p>
  `);
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
