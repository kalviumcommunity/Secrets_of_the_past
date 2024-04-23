const mongoose = require('mongoose');

const SpeakSchema = new mongoose.Schema({
    
        user: String,
        info: String
       
    
});

const SpeakEntity = mongoose.model('speakup-collections', SpeakSchema);

module.exports = SpeakEntity;
