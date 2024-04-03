const mongoose = require('mongoose');

const EntitySchema = new mongoose.Schema({
    Mystery: {
        name: String,
        author: String,
        description: String,
        image: String,
        pdf: String,
    }
});

const Entity = mongoose.model('books-collections', EntitySchema);

module.exports = Entity;
