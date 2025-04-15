import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          <div className="pro" onclick="window.location.href='Sproduct.html';">
            <img
              src="./Images/Products/Customised_Wallet.jpeg"
              alt="Custom Wallet"
            />
            <div className="des">
              <span>Makwana Store</span>
              <h5>
                Personalized Men's Wallet_Eyewear case_Keychain_Metal Pen Combo
              </h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 1,500</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Custom Wallet', 'Images/Products/Customised_Wallet.jpeg', 1500)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Tshirt_Details.html';"
          >
            <img src="./Images/Products/T-shirt.png" alt="Custom T_Shirt" />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Customised_Tshirt</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 450</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Customised_Tshirt','Images/Products/T-Shirt.png', 450)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Coffee_Mug.html';"
          >
            <img
              src="./Images/Products/Mug_Kit.jpeg"
              alt="Customised_Mug_Kit"
            />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Customizable Gift Mug with Name and Picture</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 1,080</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Customised_Mug_Kit', 'Images/Products/Mug_Kit.jpeg', 1080)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Women_parker.html';"
          >
            <img src="./Images/Products/Parker.jpg" alt="Saree_Parker" />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Women Saree Parker</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 250</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Saree_Parker','Images/Products/Parker.jpg', 250)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Women_Nighty.html';"
          >
            <img src="./Images/Products/Nighty.jpg" alt="Women_Nighty" />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Women Nighty</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 350</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Women_Nighty','Images/Products/Nighty.jpg', 350)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Shoes_Details.html';"
          >
            <img src="./Images/Products/Shoes.png" alt="Shoes" />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Casual Shoes</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 2,250</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Shoes','Images/Products/Shoes.png', 2250)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div
            className="pro"
            onclick="window.location.href='Wooden_Frame.html';"
          >
            <img
              src="./Images/Products/Wood.jpg"
              alt="Customised_Wooden_Board"
            />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Customised_Wooden_Board</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 1,250</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Customised_Wooden_Board', 'Images/Products/Wood.jpg', 1250)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='Googles.html';">
            <img src="./Images/Products/Gogals.jpg" alt="Googles" />
            <div className="des">
              <span>Makwana Store</span>
              <h5>Goggles</h5>
              <div className="star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <h4>INR 350</h4>
            </div>
            <a
              href="#"
              onclick="addToCart('Googles','Images/Products/Gogals.jpg', 350)"
            >
              <i className="bx bx-cart cart"></i>
            </a>
          </div>
        </div>
      </section>

      <header className="banner">
        <div className="container text-center">
          <h1 id="banner-title">🔥 Exclusive Deals Just for You! 🔥</h1>
          <p id="banner-subtitle">
            Shop the latest trends at unbeatable prices.
          </p>
          <a href="shop.html" className="btn cta-btn">
            Shop Now
          </a>
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
            {/* <!-- Features will be loaded here dynamically --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
