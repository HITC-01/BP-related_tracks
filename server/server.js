var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var db = require('../database/index.js');
var port = 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(`Listening on port ${port}`);

module.exports = db;