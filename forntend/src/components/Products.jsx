import { useProducts } from '../context/productContext';



const Products = () => {
  const { products } = useProducts();

  return (
    <div className="product-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {products.map(product => {
        const imageUrl = new URL(`../assets/${product.image}`, import.meta.url).href;

        return (
          <div key={product.id} className="product-card" style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p><strong>{product.category}</strong></p>
          </div>
        );
      })}


    </div>
  );
};


export default Products;
