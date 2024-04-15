const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const ImageEntity = mongoose.model('images-collections', ImageSchema);

module.exports = {
    ImageEntity
};
