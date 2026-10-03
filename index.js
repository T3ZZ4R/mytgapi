const express = require("express");

const app = express();

// پورت رندر یا لوکال
const PORT = process.env.PORT || 3000;

// روت تست
app.get("/", (req, res) => {
  res.send("Hello, VPS is alive 🚀");
});
console.log("hello from vps");
// اجرا سرور
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
