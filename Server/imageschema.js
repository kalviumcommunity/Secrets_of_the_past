const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    ImageMystery: {
        image: String,
       
    }
});

const ImageEntity = mongoose.model('images-collections', ImageSchema);

module.exports = ImageEntity;
