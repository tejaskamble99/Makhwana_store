import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin protected routes
router.post("/", requireSignIn, isAdmin, createProduct);
router.put("/:id", requireSignIn, isAdmin, updateProduct);
router.delete("/:id", requireSignIn, isAdmin, deleteProduct);

export default router;
