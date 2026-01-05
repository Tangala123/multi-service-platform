
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ service: "node-service-1", status: "running" });
});

app.listen(3000, () => {
  console.log("node-service-1 running on port 3000");
});
