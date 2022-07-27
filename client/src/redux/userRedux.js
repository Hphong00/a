import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      console.log(state.currentUser);
      state.currentUser = null;
    },

    // UPDATE PROFILE
    updateProfileStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProfileSuccess: (state, action) => {
      state.isFetching = false;
      // console.log(action.payload.user);
      // state.users[
      //   state.products.findIndex((item) => item._id === action.payload.id)
      // ] = action.payload.product;
    },
    updateProfileFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // User
     //GET ALL
     getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      //state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
