const mongoose = require('mongoose');

const SpeakSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    message: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const SpeakEntity = mongoose.model('Speak', SpeakSchema);

module.exports = SpeakEntity;
