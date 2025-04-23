import { useParams } from 'react-router-dom';
import { useProducts } from '../context/productContext';
import productData from '../productDetail.json';
import '../styles/productDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useProducts();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4>₹{product.price}</h4>
          <button
            className="btn btn-dark"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

