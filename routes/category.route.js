const express = require("express");
const categoryRoute = express.Router();
// Category model

let CategoryModel = require("../models/Category");
categoryRoute.route("/show").get((req, res) => {
 CategoryModel.find((error, data, next) => {
 if (error) {
 return next(error);
 } else {
 console.log(error);
 res.json(data);
 }
 });
});
categoryRoute.route("/create-category").post((req, res, next) => {
 CategoryModel.create(req.body, (error, data) => {
 if (error) {
 return next(error);
 } else {
 console.log(data);
 res.json(data);
 }
 });
});
categoryRoute.route("/edit-category/:id").get((req, res) => {
 CategoryModel.findById(req.params.id, (error, data, next) => {
 if (error) {
 console.log(error);
 return next(error);
 } else {
 res.json(data);
 }
 });
});
// Update student
categoryRoute.route("/update-category/:id").put((req, res, next) => {
 CategoryModel.findByIdAndUpdate(
 req.params.id,
 {
 $set: req.body,
 },
 (error, data) => {
 if (error) {
 console.log(error);
 return next(error);
 } else {
 res.json(data);
 console.log("Category successfully updated!");
 }
 }
 );
});
// Delete student

categoryRoute.route("/delete-category/:id").delete((req, res, next) => {
 CategoryModel.findByIdAndRemove(req.params.id, (error, data) => {
 if (error) {
 return next(error);
 } else {
 res.status(200).json({
 msg: data,
 });
 }
 });
});
module.exports = categoryRoute;