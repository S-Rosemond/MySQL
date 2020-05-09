const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const db = require('./database');

const database = require('./routes/database');

dotenv.config({
	path: './config.env'
});

db.connect((err) => {
	if (err) throw err;

	console.log('MySQL Connected...');
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/createdb', database);

app.listen(PORT, () => {
	`Server running on port: ${PORT}...`;
});
