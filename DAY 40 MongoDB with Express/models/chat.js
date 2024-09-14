const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    from: {
        type: String,
        requird: true,
    },
    to: {
        type: String,
        requird: true,
    },
    msg: {
        type: String,
    },
    created_at: {
        type: Date,
        requird: true,
    },
});

const chat = new mongoose.model('chat', chatSchema);

module.exports = chat;
