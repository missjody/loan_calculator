const fs = require("fs");

// handles the json response

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.parse(fs.readFileSync("./api/rates.json", "utf8"))); ???

}