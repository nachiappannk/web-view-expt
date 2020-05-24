var express = require('express');
var app = express();
let http = require('http');
const path = require('path'); 
let server = http.Server(app);
//let io = socketIO(server);
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

 


app.use(express.static(path.resolve("dist/sampleApp1"))); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
    res.sendFile(path.resolve('dist/sampleApp1/index.html'));
});

 


app.listen(8100, 'localhost');
console.log("MyProject Server is Listening on port 8100");