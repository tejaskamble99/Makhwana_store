import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [String],
  description: String,
  price: Number,
  category: String,
  stock: Number,
  brand: String,
}, { timestamps: true });

export default mongoose.model("Product", productSchema);