/////
// COMPLETE

/////
// require dependencies

const express = require("express");
const next = require("next");

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

    server.listen(server.get('port'), (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${server.get('port')}`)
  })
})
