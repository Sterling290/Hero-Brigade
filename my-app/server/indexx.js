
const express = require('express')
let app = express()
const axios = require('axios')
const cors = require('cors')
const bodyparser = require('body-parser')
// const  fetch= require("fetch")
// const stringify = require('json-stringify-safe');
CircularJSON = require('circular-json'),
app.use(cors())
// app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.static(__dirname + './server/src'));
app.get('/',(req, res)  => {
  var circularObj = {};

  axios.get("http://www.gamespot.com/api/games/?api_key=6396f9c035c48412373e128203029703de28dff7&format=json")
  .then((something)=>res.send(JSON.parse(CircularJSON.stringify((something["data"]["results"])))))
});
  
  
  
    let port = 4000;
  //localhost:port/(getRequestRoute)
  app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });