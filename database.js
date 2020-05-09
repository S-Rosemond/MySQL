const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
	host: process.env.HOST || 'localhost',
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

module.exports = db;
