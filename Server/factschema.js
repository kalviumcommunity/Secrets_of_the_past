const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
//  package.json
    
        title: String,
        info: String
       
    
});

const FactEntity = mongoose.model('facts-collections', FactSchema);

module.exports = FactEntity;
