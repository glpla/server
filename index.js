const express = require("express");
const fs = require("fs");

// import routes
const routesCoffee = require("./routes/coffee");

// instance
const app = express();
const PORT = 3000;

// register middleware
app.use(express.json());
app.use(express.static("./public"));

// register routes
app.use("/coffee", routesCoffee);

// listen
app.listen(PORT, () => {
  console.log(`server is now running on http://127.0.0.1:${PORT}`);
});
