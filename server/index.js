const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const port = 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/songs/:songid/related', (req, res) => {
  db.getRelated((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(Object.assign({}, results));
    }
  });
});

app.get('/api/songs/:songid/', (req, res) => {
  const song = req.params.songid;
  db.getSong(song, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(Object.assign({}, results));
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
