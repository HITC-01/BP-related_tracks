var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
console.log('test');

