import React from "react";
import { Link } from "react-router-dom";
import "../styles/shop.css";
import { useProducts } from "../context/productContext";

function Shop() {
  const { products, addToCart } = useProducts();

  return (
    <div className="shop-container container py-5">
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm product-card">
              <img
                src={product.image}
                className="card-img-top product-image"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>

                {/* Add to cart icon-only */}
                <i
                  className="bx bx-cart cart"
                  onClick={() => addToCart(product)}
                  style={{ cursor: 'pointer' }}
                ></i>

                {/* View details */}
                <Link to={`/products/${product.id}`} className="btn btn-dark ms-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
