let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
});

module.exports = mongoose.model("product", productSchema);
