const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000
let data = fs.readFileSync('./public/data/coffee.json');
let jsonData = JSON.parse(data);


app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.get('/getCoffee', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  const serverAddress = `${req.protocol}://${req.get('host')}`;
  res.status(200).json({
    "code": 0,
    "msg": "success",
    "data": jsonData,
    "serverAddress": serverAddress
  })
})
app.listen(PORT, () => {
  console.log(`server is now running on http://127.0.0.1:${PORT}`);
});