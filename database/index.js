var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'FECSoundCloud'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting');
        return;
    }
    console.log('connected');
});

// module.exports = db;