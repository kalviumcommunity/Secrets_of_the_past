const mongoose = require("mongoose");
const FactEntity = require("./factschema");
const ShareEntity = require("./shareschema");
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
  ShareEntity: require("./shareschema"),
  ImageEntity: require("./imageschema"),

};
