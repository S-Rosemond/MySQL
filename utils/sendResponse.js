function sendResponse(res, data, type = 'json', statusCode = 200, success = true) {
	if (type === 'send') {
		return res.status(statusCode).send(data);
	}

	res.status(statusCode).json({ success, data });
}

module.exports = sendResponse;
