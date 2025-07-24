import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Protected admin route
router.post("/", requireSignIn, isAdmin, createProduct);

export default router;