import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    // 🔥 CATEGORY (IMPROVED)
    category: {
      type: String,
      enum: ["Mobile", "Laptop", "Electronics", "Fashion", "Furniture", "General"],
      default: "General",
    },

    countInStock: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default: "https://via.placeholder.com/200",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;