const mysql = require('mysql');
const faker = require('faker');

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
  console.log('Seed connected');
});

const artists = [];
for (let i = 1; i < 101; i += 1) {
  const artist = {
    name: `${faker.name.firstName()}${faker.random.number()}`,
    user_img: faker.image.avatar(),
    followers: faker.random.number(),
  };
  artists.push(artist);
}

const songs = [];
for (let i = 1; i < 101; i += 1) {
  const song = {
    title: faker.lorem.sentence(),
    artist_id: i,
    genre: faker.random.word(),
    album_name: faker.random.words(),
    album_img: faker.image.image(),
    play_count: faker.random.number(),
    like_count: faker.random.number(),
    repost_count: faker.random.number(),
    comment_count: faker.random.number(),
  };
  songs.push(song);
}

console.log(artists);
// console.log(songs);