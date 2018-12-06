const express = require('express');
const staticRoute = module.exports = express.Router();

staticRoute.get('/', (req, res) => {
	res.sendFile('/reminder-frontend/index.html', {root: './'});
});
