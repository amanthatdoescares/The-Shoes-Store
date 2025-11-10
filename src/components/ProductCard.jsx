import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import defaultStyles from "../modules/Menu.module.css";

const ProductCard = ({ product, styles = defaultStyles }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src="/images/default_shoe.png"
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.overlay}>
          <button className={styles.quickViewButton}>Quick View</button>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={styles.star} />
          ))}
          <span className={styles.ratingText}>(4.5)</span>
        </div>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>
          {product.description ||
            "High-quality shoe with premium materials and comfort."}
        </p>
        <div className={styles.priceSection}>
          <span className={styles.productPrice}>${product.price}</span>
          <span className={styles.originalPrice}>
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
        <div className={styles.cardActions}>
          <button className={styles.addToCartButton}>
            <FaShoppingCart className={styles.cartIcon} />
            Add to Cart
          </button>
          <button className={styles.wishlistButton}>♡</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
