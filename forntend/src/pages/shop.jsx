import React, { useEffect, useState } from "react";
import productData from "../productDetail.json";
import { Link } from "react-router-dom";
import "../styles/shop.css"; // Create this for styling
import ProductList from '../components/Products';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

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
                <Link to={`/product/${product.id}`} className="btn btn-dark">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}

export default Shop;
