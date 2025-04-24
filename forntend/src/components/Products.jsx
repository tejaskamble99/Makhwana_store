import React from 'react';
import { useProducts } from '../context/productContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const { products, addToCart } = useProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container py-4">
      <ToastContainer />
      <h2 className="text-center mb-4">Our Products</h2>

      {products.length === 0 ? (
        <p className="text-center">No products available at the moment.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <i className="bx bx-cart me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
