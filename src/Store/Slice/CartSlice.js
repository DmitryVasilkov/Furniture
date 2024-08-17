import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existableItem = state.items.find((el) => el.id === item.id);
      if (existableItem) {
        existableItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    updateCartItem(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((el) => el.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const{
    addToCart,
    updateCartItem,
    clearCart
} = cartSlice.actions

export default cartSlice