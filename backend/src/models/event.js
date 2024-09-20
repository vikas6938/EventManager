const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    maxAttendees: {
        type: Number,
        required: true
    },
    image: {
        type: String // Path to the uploaded image
    }
});

module.exports = mongoose.model('Event', EventSchema);
