const express = require("express");
const { getProducts } = require("../controllers/productController");

const router = express.Router();

// GET /api/products
router.get("/products", getProducts);

module.exports = router;
