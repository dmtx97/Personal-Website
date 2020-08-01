const config = require('../../config.json');
const pgp = require('pg-promise')();
const connectionString = config.blogDBConnectionString;
const db = pgp(connectionString);

module.exports = db;