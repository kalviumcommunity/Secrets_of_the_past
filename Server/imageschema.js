const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true, 
            trim: true, 
            maxlength: 100 
        },
        image: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true, 
            trim: true, 
            maxlength: 500 
        }
    
});

const ImageEntity = mongoose.model('images-collections', ImageSchema);

module.exports = ImageEntity;
