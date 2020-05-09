const db = require('./database.js');
const sendResponse = require('../utils/sendResponse');

exports.createDatabase = async (req, res, next) => {
	let sql = 'create database nodemysql';

	db.query(sql, (err, result) => {
		if (err) throw err;

		console.log(result);
		sendResponse(res, 'Database created...', 'send');
	});
};
