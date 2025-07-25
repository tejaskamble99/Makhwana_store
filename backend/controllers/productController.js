import Product from "../models/productModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
};

// Create a new product (admin use)
export const createProduct = async (req, res) => {
  try {
    const { title, images, description, price, category, stock, brand } = req.body;

    // Validation (optional basic)
    if (!title || !price) {
      return res.status(400).json({ message: "Title and price are required" });
    }

    const newProduct = new Product({
      title,
      images,
      description,
      price,
      category,
      stock,
      brand,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err });
  }
};