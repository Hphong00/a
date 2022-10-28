import { createSlice } from "@reduxjs/toolkit";
export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // GET ORDER BY USERID
    getOrderByUserId: (state,id,action) => {
      state.orders[
        state.orders.findIndex((item) => item._id === id)
      ] = action.payload.orders;
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getOrderByUserId,
} = ordersSlice.actions;

export default ordersSlice.reducer;