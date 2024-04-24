const mongoose = require('mongoose');

const SpeakSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speak' 
    },
    message: {
        type: String,
        required: true,
        maxlength: 2000 
    },
    timestamp: {
        type: Date,
        default: Date.now,
        index: true 
    }
});

const SpeakEntity = mongoose.model('Speak', SpeakSchema);

module.exports = SpeakEntity;
