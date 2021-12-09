const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Docker Containers.");
});

app.listen(PORT, () => {
  console.log(`the app is listening at ${PORT}`);
});
