const config = require('../../config.json');
const pgp = require('pg-promise')();
const connectionString = config.blogDBConnectionString;
const db = pgp(connectionString);

db.func('version')
    .then(data => {
        console.log("Successfully connected");
        // SUCCESS
        // data.version =
        // 'PostgreSQL 9.5.1, compiled by Visual C++ build 1800, 64-bit'
    })
    .catch(error => {
        // connection-related error
        console.log(error);
    });


module.exports = db;