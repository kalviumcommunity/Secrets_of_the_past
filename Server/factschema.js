const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
    FactMystery: {
        fact: String,
       
    }
});

const FactEntity = mongoose.model('facts-collections', FactSchema);

module.exports = FactEntity;
