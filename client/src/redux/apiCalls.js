import {
  loginFailure,
  loginStart,
  loginSuccess,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  logout,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { createContext } from "react";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getOrderByUserId,
} from "./orderRedux";
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

export const logoutUser = async (dispatch) => {
  //dispatch(logout());
  localStorage.removeItem("persist:root");
};

export const changePassword = async (dispatch, body) => {
  dispatch(loginStart());
  const res = await publicRequest.push("/auth/change-password", body);
  dispatch(loginSuccess(res.data));
};
// USER

export const updateProfile = async (id, profile, dispatch) => {
  dispatch(updateProfileStart());
  const res = await publicRequest.put(`/users/profile/${id}`, profile);
  dispatch(updateProfileSuccess(res.data));
};

export const getUserById = async (id, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get(`/users/${id}`);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
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

export const getOdersById = async (id,dispatch) => {
  dispatch(getOrderStart());
  try {
     const res = await publicRequest.get("/orders");
    dispatch(getOrderByUserId(id,res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};
