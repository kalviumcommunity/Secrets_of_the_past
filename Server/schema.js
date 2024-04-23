const mongoose = require("mongoose");
const FactEntity = require("./factschema");
const ImageEntity = require("./imageschema");

const EntitySchema = new mongoose.Schema({
  name: String,
  author: String,
  description: String,
  image: String,
  pdf: String,
});

const Entity = mongoose.model("books-collections", EntitySchema);

module.exports = {
  BooksEntity: Entity,
  FictionEntity: require("./fictionSchema"),
  FactEntity: require("./factschema"),
  ImageEntity: require("./imageschema"),
  SpeakEntity: require("./speakupSchema"),
};
