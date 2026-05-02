import express from "express";
import {
  getCart,
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../controllers/cartController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ GET CART
router.get("/", protect, getCart);

// ✅ ADD (increase)
router.post("/add", protect, addToCart);

// ✅ DECREASE
router.put("/decrease", protect, decreaseQuantity);

// ✅ REMOVE
router.delete("/remove", protect, removeFromCart);

export default router;