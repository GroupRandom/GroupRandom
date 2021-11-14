const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productSchema = new Schema(
 {
 name: {
 type: String,
 },
 description: {
 type: String,
 },
 precio: {
 type: Number,
 },
 categoria: {
 type: String,
 },
  cantidad: {
 type: Number,
 },
  imagen: {
 type: String,
 },
 },
 {
 collection: "products",
 }
);
module.exports = mongoose.model("Product", productSchema);