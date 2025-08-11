const express = require("express");
const fs = require("fs");
const router = express.Router();
const data = fs.readFileSync("./public/data/coffee.json");
const coffee = JSON.parse(data).cont;
console.log(coffee);

router.get("/", (req, res) => {
  console.log("all");
  res.send(coffee);
});
module.exports = router;
