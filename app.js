/////
// require dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

/////
// set up Express app

const app = express();
const PORT = process.env.PORT || 3030;
let data = JSON.parse(fs.readFileSync("./api/rates.json", "utf8"));

/////
// set up the express app to handle data parsing

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/////
// routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/api/rates", function (req, res) {
  return res.json(data);
});

/////
// start the server and set up to listen

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
