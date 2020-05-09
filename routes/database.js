const express = require('express');
const router = express.Router();
const { createDatabase } = require('../controller/database');

router.route('/').get(createDatabase);

module.exports = router;
