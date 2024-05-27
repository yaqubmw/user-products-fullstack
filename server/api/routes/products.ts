import express from "express";
import { auth } from "../middleware/auth";

import Product from "../models/Product";

const router = express.Router();

// get all products (public)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// get products by user (authenticated)
router.get("/user", auth, async (req, res) => {
  try {
    const products = await Product.find({ userId: req.body.user._id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// create product (authenticated)
router.post("/", auth, async (req, res) => {
  const { title, price, description } = req.body;
  const userId = req.body.user._id;
  try {
    const product = new Product({ title, price, description, userId });
    await product.save();
    res.status(201).json({ message: "Product created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// get product by id (public)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// update product (authenticated)
router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { title, price, description } = req.body;
  const userId = req.body.user._id;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (product.userId.toString() === userId) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, {
        title,
        price,
        description,
      });
      res.status(200).json({ message: "Product updated successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// delete product (authenticated)
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.body.user._id;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  if (product.userId.toString() === userId) {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

export default router;
