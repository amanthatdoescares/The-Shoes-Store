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
        <div className={styles.loading}>
          <p>Loading products...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <section className={styles.menuSection}>
        <h1 className={styles.title}>Our Menu</h1>

        <div className={styles.filters}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search products..."
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

          <div className={styles.categories}>
            <button
              className={`${styles.categoryBtn} ${
                selectedCategory === "" ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.products}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.id} className={styles.product}>
                <img
                  src="/images/default_shoe.png"
                  alt={product.name}
                  className={styles.productImg}
                />
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.description}</p>
                  <span className={styles.productPrice}>${product.price}</span>
                  <button className={styles.addToCart}>Add to Cart</button>
                </div>
              </article>
            ))
          ) : (
            <p className={styles.noResults}>No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Menu;
