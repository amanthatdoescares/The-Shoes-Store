import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="Hero container">
      <motion.div
        className="Hero-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          YOUR FEET DESERVE THE BEST
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </motion.p>
        <motion.div
          className="Hero-button"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://www.amazon.in">
            <button className="ShopNow">Shop Now</button>
          </a>
          <button className="Category">Sell</button>
        </motion.div>
        <motion.div
          className="abv"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Also Available On</p>
          <div className="brand-icons">
            <a href="https://www.flipkart.com">
              <img src="/images/flipkart.png" alt="flipkart" />
            </a>
            <a href="https://www.amazon.in">
              <img src="/images/amazon.png" alt="amazon" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="/images/shoe_image.png" alt="shoe" className="Hero-image" />
      </motion.div>
    </main>
  );
};

export default Hero;
