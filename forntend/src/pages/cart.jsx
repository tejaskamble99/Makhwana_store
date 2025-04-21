import React from 'react';
import { useProducts } from '../context/productContext';
import '../styles/cart.css';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { cart, removeFromCart } = useProducts();

    const calculateSubtotal = (item) => item.price * item.quantity;
    const total = cart.reduce((acc, item) => acc + calculateSubtotal(item), 0);

    return (
        <>
            <section id="cart-container" className="section-p1">
                <h2>Your Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody id="cart-items">
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>₹{calculateSubtotal(item)}</td>
                                        <td>
                                            <button
                                                className="remove-btn"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="cart-total">
                            <h3>
                                Total: <span id="cart-total">₹{total}</span>
                            </h3>
                            <button id="checkoutBtn" className="normal">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Cart;
