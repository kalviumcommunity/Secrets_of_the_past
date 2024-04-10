const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    ImageMystery: {
        name: String,
        image: String,
        description: String,
       
    }
});

const ImageEntity = mongoose.model('images-collections', ImageSchema);

module.exports = ImageEntity;
