const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const resp = await fetch("https://httpbun.com/get");
  const json = await resp.json();
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports.app = app;
