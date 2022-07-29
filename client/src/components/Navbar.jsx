import { Badge, Button } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  NotificationsNoneTwoTone,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/apiCalls";
import Table from "./TableSearch";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  height: 50px;
  background-color: #fbfbfd;
  color: black;
  ${mobile({ height: "50px" })}
`;
const ContainerTable = styled.div`
  height: 150px;
  width: 250px;
  margin: 40px 0px 0px 145px;
`;
const Wrapper = styled.div`
  padding: 0px 100px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px;
  font-size: 12px;
  border-radius: 6px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 35px;
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Item = styled.div`
  font-size: 15px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  var isLoggedIn;
  const info = JSON.parse(localStorage.getItem("persist:root"));
  const userInfo = JSON.parse(info.user);
  const checkLogin = userInfo.currentUser;

  if (checkLogin != null) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  const logout = () => {
    logoutUser();
    window.location.reload();
    toast.success("Đăng xuất thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // search
  const [query, setQuery] = useState("search");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/products?category=${query}`
      );
      setData(res.data);
    };
    fetchData();
  }, [query]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input
              style={{ borderRadius: "6px", fontSize: 18 }}
              className="search"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ color: "black", textDecoration: "auto" }}>
              SmartP.com
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "auto" }}
            >
              {isLoggedIn ? "" : " ĐĂNG KÝ"}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "auto" }}
            >
              {isLoggedIn ? "" : "ĐĂNG NHẬP"}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/users"
              style={{ color: "black", textDecoration: "auto" }}
            >
              {isLoggedIn ? "Thông tin cá nhân" : ""}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/orders"
              style={{ color: "black", textDecoration: "auto" }}
            >
              {isLoggedIn ? "Đơn hàng" : ""}
            </Link>
          </MenuItem>
          {/* <MenuItem>
            <Link
              to="/change-password"
              style={{ color: "black", textDecoration: "auto" }}
            >
              {isLoggedIn ? "Đổi mật khẩu" : ""}
            </Link>
          </MenuItem> */}
          <Link to="/cart" style={{ color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem onClick={logout}>
            <Link to="/" style={{ color: "black", textDecoration: "auto" }}>
              {isLoggedIn ? "ĐĂNG XUẤT" : ""}
            </Link>
          </MenuItem>
          <ToastContainer />
        </Right>
      </Wrapper>
      <ContainerTable> {<Table data={data} />}</ContainerTable>
    </Container>
  );
};
export default Navbar;
