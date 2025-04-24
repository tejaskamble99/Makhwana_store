import React from "react";
import { Link } from "react-router-dom";
import "../styles/shop.css";
import { useProducts } from "../context/productContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shop() {
  const { products, addToCart } = useProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-container container py-5">
      <ToastContainer />
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {products.length === 0 ? (
          <p className="text-center">No products available.</p>
        ) : (
          products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm product-card">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                </Link>
                <div className="card-body text-center">
                  <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price}</p>
                  </Link>

                  <button
  className="btn btn-outline-dark"
  onClick={() => handleAddToCart(product)}
  style={{ cursor: "pointer" }}
  aria-label={`Add ${product.name} to cart`}
>
  <i className="bx bx-cart me-2"></i>Add to Cart
</button>

                
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
