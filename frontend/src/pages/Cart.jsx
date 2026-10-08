
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  removeFromCart,
  updateQuantity,
} from '../redux/cartSlice';
import '../styles/cart.css';

const Cart = () => {
  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Remove item from cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Update quantity
  const handleUpdateQty = (item, quantity) => {
    if (quantity > 0) {
      dispatch(
        updateQuantity({
          id: item._id,
          quantity: quantity,
        })
      );
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link to="/shop">Go Shopping</Link>
        </p>
      ) : (
        <div className="cart-layout">

          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="cart-item"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="qty-controls">

                    <button
                      onClick={() =>
                        handleUpdateQty(
                          item,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleUpdateQty(
                          item,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>
              Total: ₹{totalPrice.toFixed(2)}
            </h3>

            <button
              onClick={() => navigate('/checkout')}
              className="btn btn-checkout"
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
