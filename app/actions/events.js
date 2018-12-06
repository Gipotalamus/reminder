const ReminderEvent = require('../models/event')

const getAll = () => {
	return ReminderEvent.find({});	
};

const add = (event) => {
	return ReminderEvent.create(event);
};

const remove = (_id) => {
	return ReminderEvent.deleteOne({_id});
};

const update = (_id, event) => {
	return ReminderEvent.updateOne({_id}, event);
};

module.exports = {getAll, add, remove, update};