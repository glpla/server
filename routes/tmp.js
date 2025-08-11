// app.use(cors());

let data = fs.readFileSync("./public/data/coffee.json");
let jsonData = JSON.parse(data);
// console.log(jsonData.cont);

app.get("/getCoffee", (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  const serverAddress = `${req.protocol}://${req.get("host")}`;
  res.status(200).json({
    code: 0,
    msg: "success",
    data: jsonData.cont,
    serverAddress: serverAddress,
  });
});
app.get("/get", (req, res) => {
  res.send({
    code: 0,
    msg: "success",
    data: jsonData.cont,
  });
});
