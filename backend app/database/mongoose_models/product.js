const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the book schema to work with the mongoose
// layer as the database access interface
let productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
