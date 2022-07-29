import styled from "styled-components";
import Bang from "../components/Bang";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Clear,DeleteForever,VisibilityOutlined } from "@material-ui/icons";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getOders,getOdersById } from "../redux/apiCalls";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 200px;
  border-radius: 6px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  border-radius: 6px;
`;

const Info = styled.div`
  flex: 3;
`;

const Order = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const OrderDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const OrderName = styled.span`
    margin-left: 200px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  margin-right: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getOders(dispatch);
  }, [dispatch]);
  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;
  const getOrderById = useSelector(state => state.order.orders)
  const order = getOrderById.filter(orderid => orderid.userId === userId);
  const deleteAll = () => {
  };

  return (
    <Container>
      <Navbar />
      <Bang />
      <Wrapper>
        <Title>Đơn hàng</Title>
        <Top>
          <TopButton>
            <Link to="/" style={{ color: "black", textDecoration: "auto" }}>
              TIẾP TỤC SHOPPING
            </Link>
          </TopButton>
          <TopTexts></TopTexts>
        </Top>
        <Bottom>
          <Info>
            {order.map((order) => (
              <Order>
                <OrderDetail>
                  <Details>
                    <OrderName>
                      <b>Mã đơn hàng:</b> {order._id}
                    </OrderName>
                    <OrderName>
                      <b>Thời gian đặt hàng:</b> {order.createdAt}
                    </OrderName>
                    <OrderName>
                      <b>Tổng tiền:</b> {order.amount} VNĐ
                    </OrderName>
                    <OrderName>
                      <b>Địa chỉ nhận hàng:</b> {order.address.line1},{" "}
                      {order.address.city}, {order.address.country}
                    </OrderName>
                    <OrderName>
                      <b>Trạng thái đơn hàng:</b> {order.status}
                    </OrderName>
                  </Details>
                </OrderDetail>
                <PriceDetail>
                  <DeleteForever
                    style={{
                      margin: "0px 0px 36px 160px",
                      textDecoration: "auto",
                    }}
                    // onClick={() => clickEvent(product)}
                  />
                   <VisibilityOutlined
                    style={{
                      margin: "0px 0px 36px 160px",
                      textDecoration: "auto",
                    }}
                    // onClick={() => clickEvent(product)}
                  />
                </PriceDetail>
              </Order>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Orders;
