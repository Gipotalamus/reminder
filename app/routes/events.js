const express = require('express');
const fs = require('fs');
const eventsRoute = module.exports = express.Router();
const {getAll, getFiltered, add, remove, update} = require('../actions').events;

eventsRoute.get('/', (req, resp) => {
	if (req.query.type || req.query.daysLeft) { 
		getFiltered(req.query.type, req.query.daysLeft).then(events => resp.send(events));
	} else {
		getAll().then(events => resp.send(events));
	}	
});

eventsRoute.post('/', (req, resp) => {
	add(req.body).then(ans => resp.send(ans));
});

eventsRoute.post('/upload', (req, resp) => {	
	add(req.body).then(ans => resp.send(ans));
});

eventsRoute.delete('/:_id', (req, resp) => {
	remove(req.params._id).then(ans => resp.send(ans));
});

eventsRoute.put('/', (req, resp) => {
	update(req.body._id, req.body).then(ans => resp.send(ans));
});