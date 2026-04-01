import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import styles from "../modules/Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const latestProducts = products.slice(0, 10); // Assuming latest are first
  const trendingProducts = products.slice(10, 20); // Placeholder for trending
  const forYouProducts = products.slice(20, 30); // Placeholder for for you

  const ProductRail = ({ title, products }) => (
    <section className={styles.railSection}>
      <h2 className={styles.railTitle}>{title}</h2>
      <div className={styles.productRail}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} styles={styles} />
        ))}
      </div>
    </section>
  );

  if (loading) {
    return (
      <>
        <Hero />
        <main className="container">
          <p>Loading products...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Hero />
      <main className="container">
        <ProductRail title="Latest Products" products={latestProducts} />
        <ProductRail title="Trending" products={trendingProducts} />
        <ProductRail title="For You" products={forYouProducts} />
      </main>
    </>
  );
};

export default Home;
