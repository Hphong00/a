import {
  loginFailure,
  loginStart,
  loginSuccess,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { createContext } from "react";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";
import { getOrderStart, getOrderSuccess, getOrderFailure } from "./orderRedux";
export const AuthContext = createContext();
// AUTH
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  const res = await publicRequest.post("/auth/login", user);
  dispatch(loginSuccess(res.data));
};
export const register = async (dispatch, user) => {
  dispatch(loginStart());
  const res = await publicRequest.post("/auth/register", user);
  dispatch(loginSuccess(res.data));
};

export const logoutUser = async () => {
  localStorage.removeItem("persist:root");
};
// USER

export const updateProfile = async (id, profile, dispatch) => {
  dispatch(updateProfileStart());
  const res = await publicRequest.put(`/users/profile/${id}`, profile);
  dispatch(updateProfileSuccess(res.data));
};

// PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//ORDER
export const getOders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/orders");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};
