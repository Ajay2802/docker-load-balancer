const express = require("express");
const app = express();
const PORT = 3001;

app.get("/health", (req, res) => {
  res.send("Hello from Server 1");
});

app.listen(PORT, () => {
  console.log(`Server 1 running on port ${PORT}`);
});
