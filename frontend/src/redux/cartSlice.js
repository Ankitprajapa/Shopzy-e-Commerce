import { createSlice } from "@reduxjs/toolkit";

// Get cart items from localStorage
const savedCartItems = localStorage.getItem("cartItems");

const initialState = {
  cartItems: savedCartItems ? JSON.parse(savedCartItems) : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x._id === item._id
      );

      if (existItem) {
        // Product already exists → increase quantity
        existItem.quantity += 1;
      } else {
        // New product → add with quantity 1
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }

      // Save updated cart
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Update product quantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (x) => x._id === id
      );

      if (item && quantity > 0) {
        item.quantity = quantity;
      }

      // Save updated cart
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;

      state.cartItems = state.cartItems.filter(
        (x) => x._id !== itemId
      );

      // Save updated cart
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // Clear entire cart
    clearCart: (state) => {
      state.cartItems = [];

      localStorage.removeItem("cartItems");
    },
  },
});

// Export actions
export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;