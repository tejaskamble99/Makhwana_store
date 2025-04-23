import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="pro">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="des">
        <span>Makwana Store</span>
        <h5>{product.name}</h5>

        <div className="star">
          {/* Static 5 stars – replace with dynamic logic if needed */}
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </div>

        <h4>INR {product.price}</h4>
      </div>

      <button
        className="cart-btn"
        onClick={() =>
          console.log("Add to Cart", product.name, product.image, product.price)
        }
      >
        <FaShoppingCart className="cart-icon" />
      </button>
    </div>
  );
};

export default ProductCard;
