require('dotenv').config();
const faker = require('faker');
const Promise = require('bluebird');
const db = require('./index.js');

const songGenerator = () => {
  const songs = [];

  for (let i = 1; i < 101; i += 1) {
    const relate = [
      faker.random.number({ min: 1, max: 100 }),
      faker.random.number({ min: 1, max: 100 }),
      faker.random.number({ min: 1, max: 100 }),
    ];
    const artist = faker.random.number({ min: 1, max: 100 });
    const song = {
      title: faker.lorem.sentence(),
      artist_id: artist,
      genre: faker.random.word(),
      album_name: faker.random.words(),
      album_img: faker.image.avatar(),
      play_count: faker.random.number(),
      like_count: faker.random.number(),
      repost_count: faker.random.number(),
      comment_count: faker.random.number(),
      related_songs: relate,
    };
    songs.push(song);
  }
  return songs;
};

const artistGenerator = () => {
  const artists = [];
  for (let i = 1; i < 101; i += 1) {
    const artist = {
      name: `${faker.name.firstName()}${faker.random.number()}`,
      user_img: faker.image.avatar(),
      followers: faker.random.number(),
    };
    artists.push(artist);
  }
  return artists;
};

const artistSeed = Promise.resolve(artistGenerator());
artistSeed.then((seeded) => {
  const sql = `INSERT INTO Artists (
    name,
    user_img,
    followers)
    VALUES (?, ?, ?)`;

  for (let i = 0; i < seeded.length; i += 1) {
    const current = seeded[i];
    const userData = [
      current.name,
      current.user_img,
      current.followers,
    ];
    db.query(sql, userData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Artists added to db');
      }
    });
  }
}).catch((err) => {
  console.log(err);
});

const songSeed = Promise.resolve(songGenerator());
songSeed.then((seeded) => {
  const sql = `INSERT INTO Songs (
    title,
    artist_id,
    genre,
    album_name,
    album_img,
    play_count,
    like_count,
    repost_count,
    comment_count,
    related_songs)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  for (let i = 0; i < seeded.length; i += 1) {
    const current = seeded[i];
    const userData = [
      current.title,
      current.artist_id,
      current.genre,
      current.album_name,
      current.album_img,
      current.play_count,
      current.like_count,
      current.repost_count,
      current.comment_count,
      JSON.stringify(current.related_songs),
    ];
    db.query(sql, userData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Songs added to db');
      }
    });
  }
}).catch((err) => {
  console.log(err);
});
