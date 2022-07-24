import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2UwZDE1NjU5YTM2M2JiZTM4MDYyMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI0MjgwNjV9.qtJznlaOzUVgkPqKXfTY3p6mwJfa7Yl4JaiiecBaSsE";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export const productRequest = axios.put({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});