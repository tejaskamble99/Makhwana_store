import React from 'react'
import '../styles/cart.css'

const Cart = () => {
    return (
        <>
            <section id="cart-container" class="section-p1">
                <h2>Your Shopping Cart</h2>
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
                        {/* <!-- Cart items will be added here dynamically --> */}
                    </tbody>
                </table>
                <div class="cart-total">
                    <h3>Total: <span id="cart-total">INR 0</span></h3>
                    <button id="checkoutBtn" class="normal">Proceed to Checkout</button>
                </div>
            </section>
        </>
    )
}

export default Cart
