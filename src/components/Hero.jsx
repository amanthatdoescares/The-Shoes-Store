import React from "react";

const Hero = () => {
  return (
    <main className="Hero container">
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero-button">
          <a href="https://www.amazon.in">
            <button className="ShopNow">Shop Now</button>
          </a>
          <button className="Category">Category</button>
        </div>
        <div className="abv">
          <p>Also Available On</p>
          <div className="brand-icons">
            <a href="https://www.flipkart.com">
              <img src="/images/flipkart.png" alt="flipkart" />
            </a>
            <a href="https://www.amazon.in">
              <img src="/images/amazon.png" alt="amazon" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/shoe_image.png" alt="shoe" className="Hero-image" />
      </div>
    </main>
  );
};

export default Hero;
