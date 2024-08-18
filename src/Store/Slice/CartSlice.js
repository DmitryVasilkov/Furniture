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
        state.items.push({ ...item, quantity: 1 }); // Добавляем начальное количество
      }
    },
    incrementQuantity(state, action) {
      const item = state.items.find((el) => el.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((el) => el.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   reducers: {
//     addToCart(state, action) {
//       const item = action.payload;
//       const existableItem = state.items.find((el) => el.id === item.id);
//       if (existableItem) {
//         existableItem.quantity += item.quantity;
//       } else {
//         state.items.push({ ...item, quantity: 1 });
//       }
//     },
//     incrementQuantity(state, action) {
//       const item = state.items.find((el) => el.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decrementQuantity(state, action) {
//       const item = state.items.find((el) => el.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//     removeItem(state, action) {
//       state.items = state.items.filter((el) => el.id !== action.payload);
//     },
//     clearCart(state) {
//       state.items = [];
//     },
//   },
// });

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
//   clearCart
// } = cartSlice.actions;

// export default cartSlice;