/////
// COMPLETE

/////
// require dependencies

const express = require("express");
const next = require("next");

// custom-server-express for nextjs
// do we want or need this?
// Populate body property
// Without the use of the body-parser package req.body will return undefined. 
// To get express to populate req.body you need to install the body parser package and call the package within server.js.

// Install the package:

// npm install body-parser
// Use the package within server.js:

// const bodyParser = require('body-parser');

// app.prepare().then(() => {
//   const server = express();
//   server.use(bodyParser.urlencoded({ extended: true }))
//   server.use(bodyParser.json())
// })

/////
// set up Express server

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({dir: '.', dev })

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {

    // initiate express
    const server = express()

    // changes from suggestion after getting error
    //  Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
    server.set('port', (process.env.PORT || 3000));

    // wildcard route to catch all routes, passed to getRequestHandler()
    server.get("*", (req, res) => {
      return handle(req, res)
    })

  //   server.listen(server.get('port'), (err) => {
  //     if (err) throw err
  //     console.log(`> Ready on http://localhost:${server.get('port')}`)
  // })
})

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

