const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
