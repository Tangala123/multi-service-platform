
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ service: "node-service-2", status: "running" });
});

app.listen(3001, () => {
  console.log("node-service-2 running on port 3001");
});
