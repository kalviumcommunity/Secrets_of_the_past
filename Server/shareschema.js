const mongoose = require('mongoose');

const ShareSchema = new mongoose.Schema({
//  package.json
    
        title: String,
        info: String
       
    
});

const ShareEntity = mongoose.model('share-collections', ShareSchema);

module.exports = ShareEntity;
