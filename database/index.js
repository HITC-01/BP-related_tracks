const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'FECSoundCloud',
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting');
    return;
  }
  console.log('connected');
});

const getRelated = (callback) => {
  const sql = 'SELECT related_songs FROM Songs WHERE id=1;';
  connection.query(sql, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getSong = (songid, callback) => {
  // const sql = `SELECT * FROM Songs WHERE id=${songid}`;
  const sql = `SELECT Songs.id, Songs.title, Songs.artist_id,
      Songs.album_img, Songs.play_count, Songs.like_count, 
      Songs.repost_count, Songs.comment_count, Songs.related_songs, 
      Artists.name, Artists.followers FROM Songs INNER JOIN Artists 
      ON Songs.artist_id = Artists.id AND Songs.id=${songid}`;
  connection.query(sql, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = connection;
module.exports.getRelated = getRelated;
module.exports.getSong = getSong;
