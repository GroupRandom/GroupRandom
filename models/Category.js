const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let categorySchema = new Schema(
 {
 name: {
 type: String,
 },
 description: {
 type: String,
 },
 },
 {
 collection: "categories",
 }
);
module.exports = mongoose.model("Category", categorySchema);