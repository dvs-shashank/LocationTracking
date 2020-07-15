var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
console.log(__dirname);
app.use('/',express.static(__dirname)); // set the static files location
app.get('/hey', (req, res) => res.send('ho!'))

app.listen(port);
console.log("App listening on port " + __dirname);