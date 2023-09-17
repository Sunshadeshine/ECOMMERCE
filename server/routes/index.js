import express from "express";

import authRoutes from "./auth.js";
import categoryRoute from "./category.js";
import productRoute from "./product.js";

const router = express.Router();
console.log("router loaded");
router.get("/", function (req, res) {
  res.send("<h1>hi</h1>");
});

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/category", categoryRoute);
router.use("/api/v1/product", productRoute);
export default router;
