const mongoose = require('mongoose');

const speakupSchema = new mongoose.Schema({
    
        info: String
       
    
});

const speakupEntity = mongoose.model('speakup-collections', speakupSchema);

module.exports = speakupEntity;
