const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`server is now running on http://127.0.0.1:${PORT}`);
});
