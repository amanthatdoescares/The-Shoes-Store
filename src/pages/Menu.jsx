import React, { useState, useEffect } from "react";
import styles from "../modules/Menu.module.css";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  if (loading) {
    return (
      <main className="container">
        <h1 className={styles.title}>Our Menu</h1>
        <p>Loading products...</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 className={styles.title}>Our Menu</h1>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for shoes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <img
            src="/icons/search.svg"
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className={styles.categoryContainer}>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("")}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.thumbnail || product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>${product.price}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </main>
  );
};

export default Menu;
