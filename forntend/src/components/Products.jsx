import { FaPlus } from "react-icons/fa";

const server = "https://www.myimaginestore.com"; // Replace with your actual server URL

const Products = ({ productID, price, name, photo, stock, handler }) => {
  return (
    <div className="pcard">
      <img src={`${server}/${photo}`} alt={name} className="product-image" />

      <p>{name}</p>
      <span>₹ {price}</span>

      <div>
        <button onClick={() => handler(productID)}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Products;
