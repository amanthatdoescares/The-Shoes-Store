const fs = require("fs");
const path = require("path");

const getProducts = (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/nike_products.json");
    const data = fs.readFileSync(dataPath, "utf8");
    const products = JSON.parse(data);
    res.json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = {
  getProducts,
};
