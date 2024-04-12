const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
    FactMystery: {
        title: String,
        info: String
       
    }
});

const FactEntity = mongoose.model('facts-collections', FactSchema);

module.exports = FactEntity;
