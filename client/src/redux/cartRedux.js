import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.isFetching = false;
      state.total -= action.payload.price * action.payload.quantity;
      state.quantity -= 1;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload._id),
        1
      );
    },
    remove: (state, action) => {
      state.products.splice(action.payload);
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct,remove } = cartSlice.actions;
export default cartSlice.reducer;
