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

// module.exports = db;