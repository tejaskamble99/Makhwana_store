import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useProducts } from "../context/productContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { products, addToCart } = useProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <ToastContainer />

      <div className="home">
        <div className="hero-content">
          <div className="slide-in">
            <h1>Discover the Latest Trends</h1>
            <p>Shop the best fashion collections at unbeatable prices.</p>
            <Link to="/shop" className="button slide-in">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <div className="pro-container">
          {products.map((product) => (
            <div className="pro" key={product.id}>
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} />
                <div className="des">
                  <span>{product.brand}</span>
                  <h5>{product.name}</h5>
                  <div className="star">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <h4>INR {product.price}</h4>
                </div>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                style={{ cursor: "pointer", background: "none", border: "none" }}
                aria-label={`Add ${product.name} to cart`}
              >
                <i className="bx bx-cart cart"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <header className="banner">
        <div className="container text-center">
          <h1 id="banner-title">🔥 Exclusive Deals Just for You! 🔥</h1>
          <p id="banner-subtitle">Shop the latest trends at unbeatable prices.</p>
          <Link to="/shop" className="btn cta-btn">
            Shop Now
          </Link>
        </div>
      </header>

      <section id="Small-Banner" className="section-p1">
        <div className="Banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The Best Collection is on Sale at Our Store</span>
          <button className="white">Learn More</button>
        </div>
        <div className="Banner-box Banner-box1">
          <h2>Upcoming Sales</h2>
          <span>The Best Collection is on Sale at Our Store</span>
          <button className="white">Collections</button>
        </div>
      </section>

      <section id="Banner3">
        <div className="Banner-box">
          <h2>Seasonal Sale</h2>
          <h3>Sale Up to - 20% Off</h3>
        </div>
        <div className="Banner-box Banner-box2">
          <h2>New Footwear Collection</h2>
        </div>
        <div className="Banner-box Banner-box3"></div>
      </section>

      <div className="container-fluid feature-section">
        <div className="container">
          <div className="row" id="feature-list">
            {/* Features can be dynamically added here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
