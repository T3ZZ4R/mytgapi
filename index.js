const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 10000;

// تست ساده
app.get("/", (req, res) => {
  res.send("OK");
});

// پروکسی تلگرام
app.get("/tg", async (req, res) => {
  try {
    const response = await axios.get("https://my.telegram.org");

    res.send(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching Telegram");
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
