import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      state.cartTotalQuantity += 1;
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
    }
  },
});

export const { addToCart, toggleCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;