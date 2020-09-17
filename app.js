/////
// require dependencies

const express = require("express");
const next = require("next");
// const path = require("path");
// const fs = require("fs");

/////
// set up Express server

// set up from next js tutorial, break down each steps as homework
// to confirm you know what is happening here

// What happens in the code above? We require both Express and Next libraries. We create an instance of the Next library passing in a Boolean based on the environment which detects whether to launch Next.js in dev mode or not.

// We move ahead to call the getRequestHandler() function, then finally we prepare the app. The prepare function returns a promise, so we can do a .then pipe to it. In the .then call, we initiate Express, and we use a wildcard route to catch all routes and return it to the handler function.

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {

    // initiate express
    const server = express()

    // wildcard route to catch all routes, passed to getRequestHandler()
    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log("server ready, running on http://localhost:3000 ~(o v o.)~ ")
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
