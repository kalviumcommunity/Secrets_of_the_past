const mongoose = require('mongoose');

const FictionSchema = new mongoose.Schema({
    
        name: String,
        author: String,
        description: String,
        image: String,
        pdf: String,
    
});

const FictionEntity = mongoose.model('fiction-collections', FictionSchema);

module.exports = FictionEntity;
