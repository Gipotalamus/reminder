const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: String,
    type: String,
    description: String,
    date: Date,
    remindBefore: Number,
    picture: Buffer,
});

const ReminderEvent = mongoose.model('events', eventSchema);

module.exports = ReminderEvent;