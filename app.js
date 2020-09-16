/////
// require dependencies

const express = require("express");
const next = require("next");
const path = require("path");
const fs = require("fs");
// const { isBuffer } = require("util");

/////
// set up Express server

// set up from next js tutorial, break down each steps as homework
// to confirm you know what is happening here
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get("/", (req, res) => {
    const home = "/"
    app.render(req, res, home)
  })
  server.get("*", (req, res) => {
    return handle(req, res)
  })
  server.listen(3030, (err) => {
    if (err) throw err
    console.log("server ready, running on 3030 ~(o v o.)~ ")
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

// is this still how the rest of this needs to be sat up? 
// let data = JSON.parse(fs.readFileSync("./api/rates.json", "utf8"));

/////
// set up the express app to handle data parsing

// app.use(express.static("assets"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

/////
// routes

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });


// app.get("/api/rates", function (req, res) {
//   return res.json(data);
// });
